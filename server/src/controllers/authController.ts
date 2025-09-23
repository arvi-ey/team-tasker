import User from "../model/userModel.js";
import { catchAsync } from "../middlewares/catchAsync.js";
import { Request, Response, NextFunction } from 'express';
import { HashedPassword, CheckPassWord, GenerateToken } from "../utils/authUtil.js";
import { AppError } from "../utils/AppError.js";

export const UserSignUp = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const hashedpass = await HashedPassword(req.body.password)
    console.log(hashedpass)
    const payload = { ...req.body, password: hashedpass }
    const user = await User.create(payload)
    if (!user) {
        return next(new AppError("Failed to create user", 400))
    }
    res.status(200).json({
        success: true,
        message: "User created successfully",
        data: user
    })
})



export const UserSignIn = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return next(new AppError('Invalid email', 401));
    }
    const isValidPass = await CheckPassWord(req.body.password, user.password)
    if (!isValidPass) {
        return next(new AppError('Invalid password', 401));
    }
    const token = GenerateToken({
        id: user._id,
        role: user.role
    })
    res.cookie('accesstoken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60 * 24 * 1,
    });
    res.status(200).json({
        success: true,
        message: "Logged in successfully",
        data: user
    })
})