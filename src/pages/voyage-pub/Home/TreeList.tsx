import { articles2 } from "../MockArticles/data/index";
import { Article2, Item } from "../types/type";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import domainList from "@/utils/data/domainList";
const TreeList = () => {
  const navigate = useNavigate();
  const currentHostName = useMemo(() => window.location.hostname, []);

  const handleArticleClick = (id: number) => {
    if ([domainList.tts[0]].includes(currentHostName)) {
      // 线上环境跳转
      navigate(`/article-detail/${id}`);
    } else {
      navigate(`/tts1/article-detail/${id}`);
    }
  };
  return (
    <div>
      {articles2.map((article: Article2) => (
        <div className={styles.table} key={article.id}>
          <div className={styles.left}>
            {article.content.map((item: Item) => (
              <div className={styles.model} key={item.id}>
                <div className={styles.blog}>
                  <h2
                    onClick={() => {
                      handleArticleClick(item.id);
                    }}
                  >
                    {item.title}
                  </h2>
                  <p>{item.date}</p>
                </div>
                <div>
                  <img
                    onClick={() => {
                      handleArticleClick(item.id);
                    }}
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.right}>
            <div>
              <img
                onClick={() => {
                  handleArticleClick(article.id);
                }}
                src={article.image}
                alt={article.title}
              />
            </div>
            <h1
              onClick={() => {
                handleArticleClick(article.id);
              }}
            >
              {article.title}
            </h1>
            <p>{article.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TreeList;
