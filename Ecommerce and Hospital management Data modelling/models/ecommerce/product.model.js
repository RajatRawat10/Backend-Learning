import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title required"],
      trim: true,
      maxlength: [200],
    },
    description: {
      type: String,
      required: true,
      maxlength: [5000],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"],
    },
    originalPrice: {
      type: Number,
      min: [0],
    },
    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    productcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    brand: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
