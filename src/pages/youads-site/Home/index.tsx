import { useMemo } from "react";
import domainList from "@/utils/data/domainList";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { articleList } from "../MockArticles/data";
import Footer from "@/components/Footer";
import Tab from "../Tab";

const Home: React.FC = () => {
  const isOnLine = useMemo(
    () => domainList.tts.includes(window.location.hostname),
    []
  );

  return (
    <main className={styles.blog_list}>
      <Tab />
      <header className={styles.page_header}>
        <h1>Youads-Site</h1>
        <p> Your Ultimate Guide to Smart Savings & Exclusive Deals</p>
      </header>
      <div>
        <div className={styles.article_grid}>
          {articleList.map((article: any) => (
            <article key={article.id} className={styles.article_card}>
              <img
                src={article.image}
                alt={article.title}
                className={styles.card_image}
              />
              <div className={styles.card_content}>
                <h2>
                  <Link
                    to={
                      isOnLine
                        ? `/article-detail/${article.id}`
                        : `/tts2/article-detail/${article.id}`
                    }
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <Link
                  to={
                    isOnLine
                      ? `/article-detail/${article.id}`
                      : `/tts2/article-detail/${article.id}`
                  }
                  className={styles.read_more}
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
        copyright="Copyright © 2026 Youads-Site. All Rights Reserved."
      />
    </main>
  );
};

export default Home;
