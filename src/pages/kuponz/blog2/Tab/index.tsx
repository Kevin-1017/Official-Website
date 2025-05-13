import "./index.scss";
import { useNavigate, useLocation } from "react-router-dom";

const TabList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (routeName: string) => {
    navigate(`/${routeName}`);
  };

  return (
    <div className="tab">
      <ul className="tab-list">
        <li
          className={
            location.pathname.includes("kuponz/blog2/home") ? "active" : ""
          }
          onClick={() => navigateTo("kuponz/blog2/home")}
        >
          HOME
        </li>
        <li
          className={
            location.pathname.includes("kuponz/blog2/france") ? "active" : ""
          }
          onClick={() => navigateTo("kuponz/blog2/france")}
        >
          FRANCE
        </li>
      </ul>
    </div>
  );
};

export default TabList;
