import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registeruser = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   message: "ok",
  // });

  // get user detail from frontend
  const { fullname, email, username, password } = req.body;
  console.log("email:", email);
  // validation not empty
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  // check if the user is already exists :username or email
  const existeduser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existeduser) {
    throw new ApiError(
      409,
      "User with this email or username is already exists"
    );
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar is required");
  }
// creating object and saving in DB
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

// check for user creation and removing the password and refresh token from response
const createdUser = await User.findById(user._id).select("-password -refreshToken")
// if not createduser then throw error
if (!createdUser) {
    throw new ApiError(500,"something went wrong while registering the user") 
}

// returning response
return res.status(201).json(
    new ApiResponse(200,createdUser,"User registered successfully")
)


});

// this is the controller for register user
export { registeruser };
