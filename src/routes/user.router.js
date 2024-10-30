import { Router } from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/user.controllers.js';
import multer from 'multer';
// import {}
const userRouter = Router();
import {upload} from '../middlewares/multer.middleware.js'
userRouter.route("/register").post(
    upload.fields([{
        name: "avatar",
        maxCount: 1

    },{
        name: "coverImage",
        maxCount: 1
    }
]),
    registerUser
)
 Router.route("/login").post(loginUser)
//secure Routes
Router.route("/logout").post(verifyJWT,logoutUser)
export default userRouter