import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
// import { apiError } from "../utils/apiError.js";
import { ApiError } from "../utils/apiError.js";

// import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const Token = req.cookies?.accessToken || req.header("authorization")?.replace("Bearer ", "");

        if (!Token) {
            throw new ApiError(401, "Unauthorized Request or Credentials");
        }

        const decodedToken = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        res.user = user;
        next();
    } catch (error) {
        throw new ApiError(500, error?.message || "There was something wrong with authentication");
    }
});

// export {verifyJWT}
