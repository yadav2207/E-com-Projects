import mongoose from "mongoose";

const categotySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categotySchema);
