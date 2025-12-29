import { type } from "express/lib/response";
import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    shipingaddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shippingaddress",
    },
    ordernumber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ordernumber",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
