import { Link } from "react-router-dom";
import "./index.scss";
import { articleList } from "../MockArticles";

const BlogList = () => (
  <main className="blog-list">
    <div className="container">
      <header className="page-header">
        <h1>Kuponz Blog</h1>
        <p> Your Ultimate Guide to Smart Savings & Exclusive Deals</p>
      </header>

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
  </main>
);

export default BlogList;
