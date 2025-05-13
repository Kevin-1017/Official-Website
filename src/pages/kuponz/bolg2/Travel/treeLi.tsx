import { articles } from "../MockArticles/data/index";
const ArticleList = () => {
  return (
    <ul className="article-list">
      {articles.map((article) => (
        <li key={article.id}>
          <div>
            <img src={article.image} alt={article.title} />
          </div>
          <div>
            <h1>{article.title}</h1>
            <span>{article.content}</span>
            <p>{article.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ArticleList;
