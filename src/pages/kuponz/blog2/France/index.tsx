import "./index.scss";
import TabList from "../Tab";
import ArticleList2 from "./treeDiv";
import Footer from "../Footer";

function france() {
  return (
    <div>
      <TabList />
      <div className="banner-france">
        <h1>France</h1>
        <span>
          Discover timeless beauty, rich culture, and romantic landscapes that
          inspire wanderlust.
        </span>
      </div>
      <div className="container">
        <div className="manage">
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
