import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      unique: true, // One successful payment per order
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    method: {
      type: String,
      required: true,
      enum: ["card", "upi", "netbanking", "wallet", "cod", "razorpay", "paytm"],
    },
    provider: {
      type: String,
      required: true,
      enum: ["razorpay", "stripe", "paytm", "phonepe", "payu", "manual"],
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: "INR",
      uppercase: true,
    },
    status: {
      type: String,
      required: true,
      enum: [
        "pending",
        "processing",
        "authorized",
        "captured",
        "failed",
        "refunded",
        "cancelled",
      ],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
