import mongoose from "mongoose";

const ordernumberschema = new mongoose.Schema({
 orderNumber: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },

}, { timestamps: true });

export const Ordernumber = mongoose.model("Ordernumber", ordernumberschema);
