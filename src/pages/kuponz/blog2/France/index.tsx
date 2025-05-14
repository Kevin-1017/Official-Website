import styles from "./index.module.scss";
import TabList from "../Tab";
import ArticleList2 from "./treeDiv";
import Footer from "@/components/Footer";
import { useEffect } from "react";

function france() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TabList />
      <div className={styles.banner_france}>
        <h1>France</h1>
        <span>
          Discover timeless beauty, rich culture, and romantic landscapes that
          inspire wanderlust.
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.manage}>
          <ArticleList2 />
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
      />
    </div>
  );
}
export default france;
