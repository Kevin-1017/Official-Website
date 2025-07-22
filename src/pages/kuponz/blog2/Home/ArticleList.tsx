import { useMemo } from "react";
import { articles } from "../MockArticles/data/index";
import { Article } from "../types/type";
import { useNavigate } from "react-router-dom";
import domainList from "@/utils/data/domainList";
const ArticleList = () => {
  const navigate = useNavigate();
  const currentHostName = useMemo(() => window.location.hostname, []);

  const handleArticleClick = (id: number) => {
    if (
      currentHostName === domainList.kuponzVersion1[1] ||
      domainList.kuponzVersion2[1]
    ) {
      // 线上环境跳转
      navigate(`/article-detail/${id}`);
    } else {
      navigate(`/kuponz2/article-detail/${id}`);
    }
  };

  return (
    <ul>
      {articles.map((article: Article) => (
        <li key={article.id}>
          <div>
            <img
              src={article.image}
              alt={article.title}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <h1
              style={{ cursor: "pointer" }}
              onClick={() => handleArticleClick(article.id)}
            >
              <span>{article.title}</span>
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
