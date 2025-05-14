import { articles } from "../MockArticles/data/index";
import { Article } from "../types/type";
import { Link } from "react-router-dom";
const ArticleList = () => {
  return (
    <ul>
      {articles.map((article: Article) => (
        <li key={article.id}>
          <div>
            <img src={article.image} alt={article.title} />
          </div>
          <div>
            <h1>
              <Link to={`/kuponz/blog2/article-detail/${article.id}`}>
                {article.title}
              </Link>
            </h1>
            <span>{article.excerpt}</span>
            <p>{article.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ArticleList;
