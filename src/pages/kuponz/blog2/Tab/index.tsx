import { useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
const TabList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (routeName: string) => {
    navigate(routeName);
  };

  return (
    <div className={styles.tab}>
      <ul className={styles.tab_list}>
        <li
          className={
            ["/", "/home"].includes(location.pathname)
              ? styles.active
              : undefined
          }
          onClick={() => navigateTo("/home")}
        >
          HOME
        </li>
        <li
          className={
            location.pathname.includes("/france") ? styles.active : undefined
          }
          onClick={() => navigateTo("/france")}
        >
          FRANCE
        </li>
      </ul>
    </div>
  );
};

export default TabList;
