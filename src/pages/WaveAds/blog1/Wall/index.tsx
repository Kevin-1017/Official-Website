import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import aliexpress from "../Public/wall/aliexpress.png";
import dramabox from "../Public/wall/dramabox.png";
import foodpanda from "../Public/wall/foodpanda.png";
import lazada from "../Public/wall/lazada.png";
import maxim from "../Public/wall/maxim.png";
import netease from "../Public/wall/netease.png";
import mattek163 from "../Public/wall/Mattek163.png";
import reelshort from "../Public/wall/reelshort.jpg";
import Tapnation from "../Public/wall/Tapnation.png";
import Tecent from "../Public/wall/Tecent.png";
import TEMU from "../Public/wall/TEMU.png";
import Voodoo from "../Public/wall/Voodoo.png";
import tab6 from "../Public/tab/didi.jpg";
import tab4 from "../Public/tab/gojek.jpg";
import tab5 from "../Public/tab/grab.jpg";
import tab2 from "../Public/tab/shein.jpg";
import tab3 from "../Public/tab/shopee.jpg";
import tab1 from "../Public/tab/tiktok shop.jpg";
import abi from "../Public/wall/ABI Game.png";
import babybus from "../Public/wall/babybus.png";
import Binance from "../Public/wall/Binance.png";
import Bitget from "../Public/wall/Bitget.png";
import blibli from "../Public/wall/blibli.png";
import okx from "../Public/wall/okx.png";
import Bybit from "../Public/wall/Bybit.png";
import garena from "../Public/wall/garena.png";
import tiktok from "../Public/wall/tiktok.png";
import UnicoStudio from "../Public/wall/UnicoStudio.png";
import Kwai from "../Public/wall/kwai.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
{
  window.$t("");
}
function Wall() {
  const trackRef2 = useRef<HTMLUListElement | null>(null);
  const trackRef3 = useRef<HTMLUListElement | null>(null);
  const tabListRef = useRef<(HTMLLIElement | null)[]>([]);
  const intervalRef = useRef<number | null>(null);
  // case初始化
  const [trackRef1index, setCurrentIndex] = useState(0);
  // tab初始化
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: "0px",
    transform: "translateX(0px)",
  });
  // case总的数量
  const totalItems = 6;
  const tabImages = [tab1, tab2, tab3, tab4, tab5, tab6];

  const isInitialized = useRef(false);
  useEffect(() => {
    // 页面刷新后开始播放case
    restartAutoPlay();
    window.scrollTo(0, 0); // 页面加载时滚动到顶部
    // 防止保存时克隆多个li
    if (isInitialized.current) return;
    isInitialized.current = true;
    // list克隆逻辑
    const setupTrack = (trackElement: HTMLUListElement | null) => {
      if (!trackElement) return;
      const slides = Array.from(trackElement.children);
      slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        trackElement.appendChild(clone);
      });
    };

    setupTrack(trackRef2.current);
    setupTrack(trackRef3.current);
  }, []);
  // tab的移动逻辑
  useEffect(() => {
    const updateIndicatorPosition = () => {
      const tabElement = tabListRef.current[trackRef1index];
      if (tabElement) {
        const { offsetWidth, offsetLeft } = tabElement;
        setIndicatorStyle({
          width: `${offsetWidth}px`,
          transform: `translateX(${offsetLeft}px)`,
        });
      }
    };

    updateIndicatorPosition();

    window.addEventListener("resize", updateIndicatorPosition);
    return () => {
      window.removeEventListener("resize", updateIndicatorPosition);
    };
  }, [trackRef1index]);

  // case的播放逻辑，点击前进后退之后重新开始自动播放
  const restartAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 9995000);
  };

  // 点击前进
  const handlePrev = () => {
    clearIntervalIfExists();
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    restartAutoPlay();
  };
  // 点击后退
  const handleNext = () => {
    clearIntervalIfExists();
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    restartAutoPlay();
  };

  // 封装清除定时器逻辑
  const clearIntervalIfExists = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  //   const data = [
  //     {
  //       1: "Exclusive UA Partner",
  //       2: "· Country:",
  //       3: " Indonesia, Vietnam ,Philippines,Malaysia, Singapore",
  //       4: "· Buying Model: ",
  //       5: " Cost perSale",
  //       6: "· Optimization Goal:",
  //       7: " GMV",
  //       8: ">$20Million",
  //       9: "Monthly GMV",
  //       10: "<x%",
  //       11: "Non-return Rate",
  //       12: ">1xxK",
  //       13: "Monthly Order",
  //     },
  //     {
  //       1: "Biggest UA+RT Channel",
  //       2: "· Country:",
  //       3: "  LATAM, US, SEA, EU&CIS",
  //       4: "· Buying Model: ",
  //       5: " CPI+CPA+CPS",
  //       6: "· Optimization Goal:",
  //       7: " ROI+Traffic Magnitude+Cost",
  //       8: ">$6Million",
  //       9: "Monthly Cost",
  //       10: "2X>Target",
  //       11: "ROI",
  //       12: ">7X%",
  //       13: "Open Rate",
  //     },
  //     {
  //       1: "Biggest UA+RT Channel",
  //       2: "· Country:",
  //       3: " Indonesia, Vietnam, Philippines, Malaysia, Singapore",
  //       4: "· UA Model: ",
  //       5: " Cost per Install",
  //       6: "· UA Optimization Goal:",
  //       7: " Registration Rate and Order Rate",
  //       8: ">$6Million",
  //       9: "Monthly UA+RT Budget",
  //       10: ">4x%",
  //       11: "UA Registration Rate",
  //       12: "1.5x>Target",
  //       13: "UA Order Rate",
  //     },
  //     {
  //       1: "Top RT Channel",
  //       2: "· Country:",
  //       3: " Indonesia, Singapore, Vietnam",
  //       4: "· Buying Model: ",
  //       5: " Cost per Order+Cost per Traffic",
  //       6: "· Optimization Goal:",
  //       7: " BI CAC",
  //       8: ">$5xxK",
  //       9: "Monthly Cost",
  //       10: "0.x%<",
  //       11: "P360",
  //       12: "Lowest",
  //       13: "CAC",
  //     },
  //     {
  //       1: "Top UA Channel",
  //       2: "· Country:",
  //       3: " ID, PH, TH, VN, KR",
  //       4: "· Buying Model: ",
  //       5: " CPA",
  //       6: "· Optimization Goal:",
  //       7: " CAC",
  //       8: ">$xK",
  //       9: "Daily Cost",
  //       10: ">3X%",
  //       11: "Install to Registration Rate",
  //       12: ">4x%",
  //       13: "Registration to First Ride",
  //     },
  //     {
  //       1: "Top UA Channel",
  //       2: "· Country:",
  //       3: " LATAM, Japan, Saudi Arabia, etc",
  //       4: "· Buying Model: ",
  //       5: " CPI",
  //       6: "· Optimization Goal:",
  //       7: " Registraion Rate&First Ride Rate",
  //       8: ">$3K",
  //       9: "Daily Cost",
  //       10: ">3X%",
  //       11: "Install to Registration Rate",
  //       12: ">4x%",
  //       13: "Registration to First Ride",
  //     },
  //   ];
  const data = [
    {
      1: window.$t("Exclusive UA Partner"),
      2: window.$t("· Country:"),
      3: window.$t(" Indonesia, Vietnam ,Philippines,Malaysia, Singapore"),
      4: window.$t("· Buying Model: "),
      5: window.$t(" Cost perSale"),
      6: window.$t("· Optimization Goal:"),
      7: window.$t(" GMV"),
      8: window.$t(">$20Million"),
      9: window.$t("Monthly GMV"),
      10: window.$t("<x%"),
      11: window.$t("Non-return Rate"),
      12: window.$t(">1xxK"),
      13: window.$t("Monthly Order"),
    },
    {
      1: window.$t("Biggest UA+RT Channel"),
      2: window.$t("· Country:"),
      3: window.$t("  LATAM, US, SEA, EU&CIS"),
      4: window.$t("· Buying Model: "),
      5: window.$t(" CPI+CPA+CPS"),
      6: window.$t("· Optimization Goal:"),
      7: window.$t(" ROI+Traffic Magnitude+Cost"),
      8: window.$t(">$6Million"),
      9: window.$t("Monthly Cost"),
      10: window.$t("2X>Target"),
      11: window.$t("ROI"),
      12: window.$t(">7X%"),
      13: window.$t("Open Rate"),
    },
    {
      1: window.$t("Biggest UA+RT Channel"),
      2: window.$t("· Country:"),
      3: window.$t(" Indonesia, Vietnam, Philippines, Malaysia, Singapore"),
      4: window.$t("· UA Model: "),
      5: window.$t(" Cost per Install"),
      6: window.$t("· UA Optimization Goal:"),
      7: window.$t(" Registration Rate and Order Rate"),
      8: window.$t(">$6Million"),
      9: window.$t("Monthly UA+RT Budget"),
      10: window.$t(">4x%"),
      11: window.$t("UA Registration Rate"),
      12: window.$t("1.5x>Target"),
      13: window.$t("UA Order Rate"),
    },
    {
      1: window.$t("Top RT Channel"),
      2: window.$t("· Country:"),
      3: window.$t(" Indonesia, Singapore, Vietnam"),
      4: window.$t("· Buying Model: "),
      5: window.$t(" Cost per Order+Cost per Traffic"),
      6: window.$t("· Optimization Goal:"),
      7: window.$t(" BI CAC"),
      8: window.$t(">$5xxK"),
      9: window.$t("Monthly Cost"),
      10: window.$t("0.x%<"),
      11: window.$t("P360"),
      12: window.$t("Lowest"),
      13: window.$t("CAC"),
    },
    {
      1: window.$t("Top UA Channel"),
      2: window.$t("· Country:"),
      3: window.$t(" ID, PH, TH, VN, KR"),
      4: window.$t("· Buying Model: "),
      5: window.$t(" CPA"),
      6: window.$t("· Optimization Goal:"),
      7: window.$t(" CAC"),
      8: window.$t(">$xK"),
      9: window.$t("Daily Cost"),
      10: window.$t(">3X%"),
      11: window.$t("Install to Registration Rate"),
      12: window.$t(">4x%"),
      13: window.$t("Registration to First Ride"),
    },
    {
      1: window.$t("Top UA Channel"),
      2: window.$t("· Country:"),
      3: window.$t(" LATAM, Japan, Saudi Arabia, etc"),
      4: window.$t("· Buying Model: "),
      5: window.$t(" CPI"),
      6: window.$t("· Optimization Goal:"),
      7: window.$t(" Registraion Rate&First Ride Rate"),
      8: window.$t(">$3K"),
      9: window.$t("Daily Cost"),
      10: window.$t(">3X%"),
      11: window.$t("Install to Registration Rate"),
      12: window.$t(">4x%"),
      13: window.$t("Registration to First Ride"),
    },
  ];
  return (
    <div className={styles.wall}>
      <h1>{window.$t("Trusted by Global Leading Brands")}</h1>
      <div className={styles.tab}>
        <ul>
          {tabImages.map((imgSrc, index) => (
            <li
              key={index}
              ref={(el) => (tabListRef.current[index] = el)}
              onClick={() => {
                clearIntervalIfExists();
                setCurrentIndex(index);
                restartAutoPlay();
              }}
            >
              <div>
                <img src={imgSrc} alt={`tab-${index}`} />
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.indicator} style={indicatorStyle} />
      </div>
      <div className={styles.case}>
        <ul
          style={{
            transform: `translateX(-${trackRef1index * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {data.map((item, index) => (
            <li key={index}>
              <div className={styles.case_div}>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div>
                    <img src={tabImages[index]} alt="" />
                  </div>
                  <div className={styles.case_right}>
                    <h2>{item["1"]}</h2>
                    {index === 2 ? (
                      <span style={{ fontSize: "22px" }}>
                        <strong>
                          {window.$t("（Exclusding Meta&Google）")}
                        </strong>
                      </span>
                    ) : (
                      ""
                    )}
                    <p>
                      <strong>{item["2"]}</strong>
                      {item["3"]}
                      <br />
                      <strong>{item["4"]}</strong>
                      {item["5"]}
                      <br />
                      <strong>{item["6"]}</strong>
                      {item["7"]}
                    </p>
                  </div>
                </div>
                <div className={styles.case_footer}>
                  <div>
                    <span>{item["8"]}</span>
                    <p>{item["9"]}</p>
                  </div>
                  <div>
                    <span>{item["10"]}</span>
                    <p>{item["11"]}</p>
                  </div>
                  <div>
                    <span>{item["12"]}</span>
                    <p>{item["13"]}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={styles.btn_left}
          onClick={() => {
            handlePrev();
          }}
        >
          <LeftOutlined />
        </div>
        <div
          className={styles.btn_right}
          onClick={() => {
            handleNext();
          }}
        >
          <RightOutlined />
        </div>
      </div>
      <div className={styles.wall_list}>
        <ul className={styles.wall_list_ul1} ref={trackRef2}>
          <li>
            <img src={aliexpress} alt="" />
          </li>
          <li>
            <img src={dramabox} alt="" />
          </li>
          <li>
            <img src={foodpanda} alt="" />
          </li>
          <li>
            <img src={lazada} alt="" />
          </li>
          <li>
            <img src={maxim} alt="" />
          </li>
          <li>
            <img src={netease} alt="" />
          </li>
          <li>
            <img src={mattek163} alt="" />
          </li>
          <li>
            <img src={reelshort} alt="" />
          </li>
          <li>
            <img src={Tapnation} alt="" />
          </li>
          <li>
            <img src={Tecent} alt="" />
          </li>
          <li>
            <img src={TEMU} alt="" />
          </li>
          <li>
            <img src={Voodoo} alt="" />
          </li>
        </ul>
        <ul className={styles.wall_list_ul2} ref={trackRef3}>
          <li>
            <img src={abi} alt="" />
          </li>
          <li>
            <img src={babybus} alt="" />
          </li>
          <li>
            <img src={Binance} alt="" />
          </li>
          <li>
            <img src={Bitget} alt="" />
          </li>
          <li>
            <img src={blibli} alt="" />
          </li>
          <li>
            <img src={Kwai} alt="" />
          </li>
          <li>
            <img src={okx} alt="" />
          </li>
          <li>
            <img src={Bybit} alt="" />
          </li>
          <li>
            <img src={garena} alt="" />
          </li>
          <li>
            <img src={tiktok} alt="" />
          </li>
          <li>
            <img src={UnicoStudio} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Wall;
