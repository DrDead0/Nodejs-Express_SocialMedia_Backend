import { Router } from 'express';
import { loginUser, logoutUser, registerUser,refreshAccessToken, changeCurrentPassword, updateAvatar, getUserChannelProfile, getWatchHistory } from '../controllers/user.controllers.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

const userRouter = Router();

userRouter.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerUser
);

userRouter.route("/login").post(loginUser);
// Secure Routes made by ashish chaurasiya hehehehe
userRouter.route("/logout").post(verifyJWT, logoutUser);// logout
userRouter.route("/refresh-Token").post(refreshAccessToken);// refresh access token
userRouter.route("/change-password").post(verifyJWT,changeCurrentPassword);// change password
userRouter.route("/current-user").get(verifyJWT,getCurrentUser);// get current user
userRouter.route("/update-account-details").post(verifyJWT,updateAccountDetails); // update account details
userRouter.route("/update-details").patch(verifyJWT,updateDetails); // update details
userRouter.route("/avatar").patch(verifyJWT,upload.single("avatar"),updateAvatar); // update avatar
userRouter.route("/cover-image").patch(verifyJWT,upload.single("coverImage"),updateCoverImage); // update cover image  
userRouter.route("/c:/:username").get(verifyJWT,getUserChannelProfile); // get user by username 
//we have used :username because we ahve used params in the function getUserChannelProfile 

userRouter.route("/history").get(verifyJWT,getWatchHistory); // get user by watch history
export default userRouter;
