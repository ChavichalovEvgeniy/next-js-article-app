import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  id: { type: String, requires: true },
  title: { type: String, required: true },
  article: { type: String, required: true, maxlength: 255 },
  email: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
