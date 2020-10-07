import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const taskModel = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, required: true },
});

export default model("Article", taskModel);
