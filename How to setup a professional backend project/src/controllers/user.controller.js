import { asyncHandler } from "../utils/asyncHandler.js";

const registeruser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});
// this is the controller for register user
export { registeruser };
