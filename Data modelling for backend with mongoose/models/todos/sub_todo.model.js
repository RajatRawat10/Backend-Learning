import mongoose, { mongo } from "mongoose";

const subTodoschema = new mongoose.Schema({}, { timeseries: true });

export const Subtodo = mongoose.model("Subtodo", subTodoschema);
