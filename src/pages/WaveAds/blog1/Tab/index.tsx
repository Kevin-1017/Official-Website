import styles from "./index.module.scss";
import logo from "../Public/logo.jpg";
import language from "../Public/language.png";
import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import domainList from "@/utils/data/domainList";
const TabList = () => {
  const [showList, setShowList] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // 控制 tab 显示
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowList(false); // 点击外部区域关闭
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // 滚动监听逻辑
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // 向下滚动 → 隐藏 tab
        setIsVisible(false);
      } else {
        // 向上滚动 → 显示 tab
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const changeLang = function (value: string) {
    window.localStorage.setItem("lang", value);
    window.location.reload();
  };

  const nagative = useNavigate();
  const currentHostName = useMemo(() => window.location.hostname, []);
  const toContact = () => {
    if (currentHostName === "waveads-global.com") {
      nagative("/contact-us");
    } else {
      nagative("/waveads1/contact-us");
    }
  };
  return (
    <div
      className={styles.tab}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className={styles.left}>
        <img
          src={logo}
          alt=""
          onClick={() => {
            nagative("/waveads1/home");
            window.location.reload();
          }}
        />
        <ul>
          <li></li>
        </ul>
      </div>
      <div className={styles.right} ref={wrapperRef}>
        <img src={language} alt="" onClick={() => setShowList(!showList)} />
        {/* 英语、葡萄牙、西班牙、韩语、日语 */}
        {showList && (
          <ul>
            <li onClick={() => changeLang("en")}>{window.$t("English")}</li>
            <li onClick={() => changeLang("pt")}>{window.$t("Portuguese")}</li>
            <li onClick={() => changeLang("es")}>{window.$t("Spanish")}</li>
            <li onClick={() => changeLang("ko")}>{window.$t("Korean")}</li>
            <li onClick={() => changeLang("ja")}>{window.$t("Japanese")}</li>
          </ul>
        )}
        <div className={styles.contact} onClick={toContact}>
          {window.$t("CONTACT US")}
        </div>
      </div>
    </div>
  );
};

export default TabList;
