import { useParams } from "react-router-dom";
import "@/pages/kuponz/blog2/ArticleDetail/index.scss";
import { useState } from "react";
import { articles } from "../MockArticles/data/index";
import TabList from "../Tab/index";
import Footer from "../Footer";
const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article] = useState<any>(
    id && !isNaN(Number(id))
      ? articles.find((item) => item.id === Number(id)) || { content: [] }
      : { content: [] }
  );

  return (
    <div>
      <TabList />
      <main className="article-main">
        <div className="container">
          <article className="article-content">
            {/* 特征图保持原有样式 */}
            <img
              src={article.image}
              alt={article.title}
              className="featured-image"
            />
            <h1>{article.title}</h1>
            <div className="meta-info">
              <span>{article.date}</span>
            </div>
            {/* 动态内容渲染 */}
            <div className="dynamic-content">
              {article.content.map((contentItem: any, index: number) => (
                <div key={`content-${index}`} className="content-section">
                  {/* 内容图片 */}
                  {contentItem.image && (
                    <img
                      src={contentItem.image}
                      alt={`Content image ${index + 1}`}
                      className="content-image"
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
          backgroundColor: "#ffffff",
          padding: "20px 0",
        }}
        contentStyle={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        textStyle={{
          color: "#333333",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

export default ArticleDetail;
