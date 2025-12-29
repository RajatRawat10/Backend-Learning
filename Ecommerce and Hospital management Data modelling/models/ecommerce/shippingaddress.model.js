import mongoose from "mongoose";

const shippingaddressSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    line1: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    landmark: String,
  },
  { timestamps: true }
);

export const Shippingaddress = mongoose.model(
  "Shippingaddress",
  shippingaddress
);
