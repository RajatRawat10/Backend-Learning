import { ApiError } from "../utils/apiError"
import { asyncHandler } from "../utils/asyncHandler"
import jwt from "jsonwebtoken"
import {User} from "../models/user.model"



export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =  req.cookie?.accessToken || req.header("Authoriztion")?.replace("Bearer","")
  if(!token){
    throw new ApiError(401,"Unauthorized request")
  }




})  