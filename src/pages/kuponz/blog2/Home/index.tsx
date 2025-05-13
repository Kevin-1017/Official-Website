import "./index.scss";
import ArticleList from "./treeLi";
import TabList from "../Tab";
import Footer from "../Footer";
function Home() {
  return (
    <div>
      <TabList />
      <div className="banner">
        <h1>HOME</h1>
        <span>
          Plan your journey, explore new destinations, and create unforgettable
          memories.
        </span>
      </div>
      <div className="container">
        <div className="manage">
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
