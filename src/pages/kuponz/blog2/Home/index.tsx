import "./index.scss";
import ArticleList from "./treeLi";
import TabList from "../Tab";
import Footer from "../Footer";

function Home() {
  return (
    <div className="home">
      <TabList />
      <div className="banner-home">
        <h1>Home</h1>
        <span>this is a home page</span>
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
