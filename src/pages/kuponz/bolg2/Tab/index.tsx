import "./index.scss";
import { useNavigate } from "react-router-dom";
const TabList = () => {
  const navigate = useNavigate();

  const navigateTo = (routeName: any) => {
    navigate(`/${routeName}`);
  };
  return (
    <div className="tab">
      <ul className="tab-list">
        <li onClick={() => navigateTo("kuponz/blog2")}>travel</li>
        <li onClick={() => navigateTo("kuponz/blog2/france")}>france</li>
      </ul>
    </div>
  );
};
export default TabList;
