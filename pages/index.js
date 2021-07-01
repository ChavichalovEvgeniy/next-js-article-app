import Layout from "../components/Layout";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import connectToDB from "../utils/connectToDB";
import Article from "../models/Article";

export default function ArticleList({ articles }) {
  return (
    <Layout title="Review last articles">
      <Header
        title="Review last articles"
        link={{ url: "/create-article", label: "Create an article" }}
      />

      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  await connectToDB();
  const foundArticles = await Article.find({}).sort("-date").limit(5);
  const articles = foundArticles.map((doc) => {
    const article = doc.toObject();
    article._id = article._id.toString();
    article.date = article.date.toString();
    return article;
  });

  return {
    props: { articles: articles },
  };
}
