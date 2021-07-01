import connectToDB from "../../utils/connectToDB";
import Article from "../../models/Article";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectToDB();
    const article = new Article(req.body);
    await article.save();
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
}
