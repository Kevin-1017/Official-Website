import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { articles } from "../MockArticles/data/index";
import Tab from "../Tab/index";
import Footer from "@/components/Footer";
import styles from "./index.module.scss";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article] = useState<any>(
    id && !isNaN(Number(id))
      ? articles.find((item) => item.id === Number(id)) || { content: [] }
      : { content: [] }
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Tab />
      <main className={styles.article_detail}>
        <div className={styles.container}>
          <article className={styles.article_content}>
            {/* 特征图保持原有样式 */}
            <img
              src={article.image}
              alt={article.title}
              className={styles.featured_image}
            />

            <h1>{article.title}</h1>
            <div className={styles.meta_info}>
              <span>{article.date}</span>
            </div>

            {/* 动态内容渲染 */}
            <div className={styles.content_body}>
              {article.content.map((contentItem: any, index: number) => (
                <div
                  key={`content-${index}`}
                  className={styles.content_section}
                >
                  {/* 内容图片 */}
                  {contentItem.image && (
                    <img
                      src={contentItem.image}
                      alt={`Content image ${index + 1}`}
                      className={styles.content_image}
                    />
                  )}

                  {/* 段落内容 */}
                  {contentItem.excerpt?.map(
                    (paragraph: string, pIndex: number) => (
                      <p key={`p-${index}-${pIndex}`}>{paragraph}</p>
                    )
                  )}
                </div>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer
        style={{
          marginTop: "30px",
          backgroundColor: "#333333",
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
        copyright=" Copyright © 2026 Voyage. All Rights Reserved."
      />
    </div>
  );
};

export default ArticleDetail;
