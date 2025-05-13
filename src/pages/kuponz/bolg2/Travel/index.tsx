import "./index.scss";
import ArticleList from "./treeLi";
import TabList from "../Tab";
function Travel() {
  return (
    <div>
      <TabList />
      <div className="banner">
        <h1>Travel</h1>
        <span>
          Plan your journey, explore new destinations, and create unforgettable
          memories.
        </span>
      </div>
      <div className="container">
        <div className="manage">
          <ArticleList />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Travel;
