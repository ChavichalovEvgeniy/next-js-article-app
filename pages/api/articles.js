import connectToDB from "../../utils/connectToDB";
import Article from "../../models/Article";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await connectToDB();

    const foundArticles = await Article.find({});
    res.status(200).json({ success: true, data: foundArticles });
  } else {
    res.status(400).json({ success: false });
  }
}
