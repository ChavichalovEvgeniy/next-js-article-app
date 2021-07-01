import Layout from "../components/Layout";
import Header from "../components/Header";
import CreateArticleForm from "../components/CreateArticleForm";

export default function CreateArticle() {
  return (
    <Layout title="Create an article">
      <Header
        title="Create an article"
        link={{ url: "/", label: "View articles" }}
      />

      <CreateArticleForm />
    </Layout>
  );
}
