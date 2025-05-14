import styles from "./index.module.scss";
import ArticleList from "./treeLi";
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
        <h1>Home</h1>
        <span>this is a home page</span>
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
      />
    </div>
  );
}

export default Home;
