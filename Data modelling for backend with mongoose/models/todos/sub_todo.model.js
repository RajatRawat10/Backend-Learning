import { type } from "express/lib/response";
import mongoose, { mongo } from "mongoose";

const subTodoschema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    complete: {
      type: true,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timeseries: true }
);

export const Subtodo = mongoose.model("Subtodo", subTodoschema);
