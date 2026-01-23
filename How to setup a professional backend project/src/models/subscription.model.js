import mongoose from "mongoose";
import { User } from "./user.model";

const subscriptionSchema = new mongoose.Schema({}, { timestamps: true });

export const subscription = mongoose.model("Subscription", subscriptionSchema);
