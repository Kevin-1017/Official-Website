import { Link } from "react-router-dom";
import "./index.scss";
import { articleList } from "../MockArticles";
import Footer from "@/components/Footer";

const BlogList = () => (
  <main className="blog-list">
    <header className="page-header">
      <h1>Kuponz Blog</h1>
      <p> Your Ultimate Guide to Smart Savings & Exclusive Deals</p>
    </header>
    <div className="container">
      <div className="article-grid">
        {articleList.map((article: any) => (
          <article key={article.id} className="article-card">
            <img
              src={article.image}
              alt={article.title}
              className="card-image"
            />
            <div className="card-content">
              <h2>
                <Link to={`/kuponz/blog1/article-detail/${article.id}`}>
                  {article.title}
                </Link>
              </h2>
              <p className="excerpt">{article.excerpt}</p>
              <Link
                to={`/kuponz/blog1/article-detail/${article.id}`}
                className="read-more"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
    <Footer
      style={{
        marginTop: "30px",
        backgroundColor: "#343a40",
        padding: "20px 0",
      }}
      contentStyle={{
        maxWidth: "1400px",
        margin: "0 auto",
      }}
      textStyle={{
        color: "#ffffff",
        fontSize: "13px",
        fontWeight: "bold",
      }}
    />
  </main>
);

export default BlogList;
