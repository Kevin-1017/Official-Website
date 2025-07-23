import { useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import { useMemo } from "react";
import domainList from "@/utils/data/domainList";
const TabList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (routeName: string) => {
    navigate(routeName);
  };
  const currentHostName = useMemo(() => window.location.hostname, []);
  if ([domainList.tts[0]].includes(currentHostName)) {
    // 线上环境
    return (
      <div className={`${styles.tab} ${styles.norem_tab}`}>
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
        </ul>
      </div>
    );
  } else {
    // 非线上环境，包含生产和测试环境
    return (
      <div className={`${styles.tab} ${styles.norem_tab}`}>
        <ul className={styles.tab_list}>
          <li
            className={
              location.pathname.includes("/tts1/home")
                ? styles.active
                : undefined
            }
            onClick={() => navigateTo("/tts1/home")}
          >
            HOME
          </li>
        </ul>
      </div>
    );
  }
};

export default TabList;
