import { Router } from 'express';
import { registerUser } from '../controllers/user.controllers.js';
import multer from 'multer';

const userRouter = Router();
import {upload} from '../middlewares/multer.middleware.js'
userRouter.route("/register",).post(
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



export default userRouter