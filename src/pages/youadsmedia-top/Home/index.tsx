import Footer from "@/components/Footer";
import { useEffect } from "react";
import styles from "./index.module.scss";
import ArticleList from "./ArticleList";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.banner_home}>
        <h1>Welcome To Youadsmedia-Top</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.manage}>
          <ArticleList />
        </div>
      </div>
      <Footer
        style={{
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
        copyright="Copyright © 2026 Youadsmedia-Top. All Rights Reserved."
      />
    </div>
  );
}

export default Home;
