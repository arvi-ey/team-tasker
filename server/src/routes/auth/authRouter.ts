import express from "express"
import { signUpValidation, signInValidation } from "./authValidator.js"
import { validateRequest } from "../../middlewares/routeValidator.js"
import { UserSignUp, UserSignIn } from "../../controllers/authController.js"
const Router = express.Router()

Router.post('/signup', signUpValidation, validateRequest, UserSignUp)
Router.post('/signin', signInValidation, validateRequest, UserSignIn)


export default Router;