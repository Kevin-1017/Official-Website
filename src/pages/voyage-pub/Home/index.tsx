import styles from "./index.module.scss";
import ArticleList from "./ArticleList";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import TreeList from "./TreeList";
import Tab from "../Tab";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.home}>
      <Tab />
      <div className={styles.banner_home}>
        <h1>Voyage-Pub</h1>
        <p>Welcome to Voyage – Your Ultimate Beauty Destination!</p>
        <span>
          At Voyage, we bring you the hottest cosmetics from top brands at
          unbeatable prices – plus exclusive casback rewards on every purchase!
          Whether you're looking for skincare essentials, luxurious makeup, or
          trending beauty tools, discover quality products with real savings.
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.manage}>
          <ArticleList />
        </div>
        <div className={styles.table}>
          <TreeList />
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
        copyright="Copyright © 2026 Voyage. All Rights Reserved."
      />
    </div>
  );
}

export default Home;
