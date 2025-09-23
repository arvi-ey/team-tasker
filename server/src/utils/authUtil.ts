import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


interface JwtPayload {
    id: any;
    role: string;
}

export const HashedPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword
}

export const CheckPassWord = async (plainPassword: string,
    hashedPassword: string) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
}


export const GenerateToken = async (payload: JwtPayload) => {
    return jwt.sign(payload, process.env.JWT_SECRET!);
}