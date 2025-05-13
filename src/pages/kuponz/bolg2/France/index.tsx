import "./index.scss";
import TabList from "../Tab";
import ArticleList2 from "./treeDiv";
function france() {
  return (
    <div>
      <TabList />
      <div className="banner">
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
        <div className="footer"></div>
      </div>
    </div>
  );
}
export default france;
