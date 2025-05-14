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
            ["/", "/kuponz/blog2"].includes(location.pathname)
              ? styles.active
              : undefined
          }
          onClick={() => navigateTo("/kuponz/blog2")}
        >
          HOME
        </li>
        <li
          className={
            location.pathname.includes("/kuponz/blog2/france")
              ? styles.active
              : undefined
          }
          onClick={() => navigateTo("/kuponz/blog2/france")}
        >
          FRANCE
        </li>
      </ul>
    </div>
  );
};

export default TabList;
