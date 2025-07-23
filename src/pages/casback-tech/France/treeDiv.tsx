import { articles2 } from "../MockArticles/data/index";
import { Article2, Item } from "../types/type";
import styles from "./index.module.scss";
const ArticleList2 = () => {
  return (
    <div>
      {articles2.map((article: Article2) => (
        <div className={styles.table} key={article.id}>
          <div className={styles.left}>
            {article.content.map((item: Item) => (
              <div className={styles.model} key={item.id}>
                <div className={styles.blog}>
                  <h2>{item.title}</h2>
                  <p>{item.date}</p>
                </div>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.right}>
            <div>
              <img src={article.image} alt={article.title} />
            </div>
            <h1>{article.title}</h1>
            <p>{article.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ArticleList2;
