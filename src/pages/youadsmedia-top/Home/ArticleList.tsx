import { useMemo } from "react";
import { articles } from "../MockArticles/data/index";
import { Article } from "../types/type";
import { useNavigate } from "react-router-dom";
import domainList from "@/utils/data/domainList";
const ArticleList = () => {
  const navigate = useNavigate();
  const currentHostName = useMemo(() => window.location.hostname, []);

  const handleArticleClick = (id: number) => {
    if ([domainList.tts[2]].includes(currentHostName)) {
      // 线上环境跳转
      navigate(`/article-detail/${id}`);
    } else {
      navigate(`/tts3/article-detail/${id}`);
    }
  };

  return (
    <ul>
      {articles.map((article: Article) => (
        <li key={article.id}>
          <div>
            <h1 onClick={() => handleArticleClick(article.id)}>
              <span>{article.title}</span>
            </h1>
            <span>{article.excerpt}</span>
          </div>
          <div>
            <img
              onClick={() => handleArticleClick(article.id)}
              src={article.image}
              alt={article.title}
            />
            <p>{article.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
