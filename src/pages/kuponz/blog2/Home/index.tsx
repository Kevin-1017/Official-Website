import styles from "./index.module.scss";
import ArticleList from "./ArticleList";
import TabList from "../Tab";
import Footer from "@/components/Footer";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.home}>
      <TabList />
      <div className={styles.banner_home}>
        <h1>Casback</h1>
        <p>Welcome to Casback – Your Ultimate Beauty Destination!</p>
        <span>
          At Casback, we bring you the hottest cosmetics from top brands at
          unbeatable prices – plus exclusive casback rewards on every purchase!
          Whether you're looking for skincare essentials, luxurious makeup, or
          trending beauty tools, discover quality products with real savings.
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.manage}>
          <ArticleList />
        </div>
      </div>
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
        copyright="Copyright © 2026 Casback. All Rights Reserved."
      />
    </div>
  );
}

export default Home;
