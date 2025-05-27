import styles from "./index.module.scss";
import TabList from "../Tab";
import { useEffect, useRef, useState } from "react";
import brand from "../Public/brand.jpg";
import team1 from "../Public/team1.jpg";
import team2 from "../Public/team2.jpg";
import team3 from "../Public/team3.jpeg";
import aliexpress from "../Public/wall/aliexpress.png";
import booking from "../Public/wall/booking.jpg";
import dramabox from "../Public/wall/dramabox.webp";
import foodpanda from "../Public/wall/foodpanda.png";
import lazada from "../Public/wall/lazada.png";
import maxim from "../Public/wall/maxim.png";
import netease from "../Public/wall/netease.webp";
import netshort from "../Public/wall/netshort.webp";
import reelshort from "../Public/wall/reelshort.jpg";
import Tapnation from "../Public/wall/Tapnation.png";
import Tecent from "../Public/wall/Tecent.png";
import TEMU from "../Public/wall/TEMU.png";
import Tiktok from "../Public/wall/Tiktok-Shop.jpg";
import UnicoStudioLogo from "../Public/wall/UnicoStudioLogo.webp";
import Voodoo from "../Public/wall/Voodoo.png";
import Footer from "../Footer/index";
import ContactUs from "../ContactUs";
import case1 from "../Public/case/case1.jpg";
import case2 from "../Public/case/case2.jpg";
import tab1 from "../Public/tab/tab1.jpg";
function Home() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 6;
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const track = trackRef.current;
    if (!track) return;

    // 克隆所有 li 添加到末尾，实现无缝滚动
    const slides = Array.from(track.children);
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });

    // 启动自动播放
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  const restartAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 5000);
  };

  const handlePrev = () => {
    clearIntervalIfExists();
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    restartAutoPlay();
  };

  const handleNext = () => {
    clearIntervalIfExists();
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    restartAutoPlay();
  };

  // 封装清除逻辑
  const clearIntervalIfExists = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  return (
    <div className={styles.home}>
      <TabList />
      <div className={styles.banner_home}>
        <h1>The Digital Wave Rider</h1>
        <p>
          Empowering mobile growth through user acquisition, re-targeting, ASO
          solutions to maximize app success
        </p>
      </div>
      <div className={styles.container}>
        <h1>brand Introduction</h1>
        <div className={styles.brand}>
          <img src={brand} alt="" />
          <div className={styles.brand_right}>
            <p>
              Founded in 2017, WaveAds is headquartered in LA. It is a leading
              global mobile growth platform dedicated to driving media synergy
              through Al technology. We provide developers with intelligent
              growth solutions that span User Acquisition, Re-targeting, ASO,
              traffic monetization, and full life-cycle management.
            </p>
          </div>
        </div>
        <div className={styles.team}>
          <h1>Global Team</h1>
          <ul>
            <li>
              <div>
                <img src={team1} alt="" />
                <p>Garry</p>
                <p>Head of SEA</p>
              </div>
            </li>
            <li>
              <div>
                <img src={team2} alt="" />
                <p>Ayrton Neto</p>
                <p>Head of LATAM</p>
              </div>
            </li>
            <li>
              <div>
                <img src={team3} alt="" />
                <p>Lee</p>
                <p>Head of East Asia</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.wall}>
          <h1>Trusted by Global Leading Brands</h1>
          <div className={styles.tab}>
            <ul>
              <li>
                <div>
                  <img src={tab1} alt="" />
                </div>
              </li>
              <li>
                <div>
                  <img src={tab1} alt="" />
                </div>
              </li>
              <li>
                <div>
                  <img src={tab1} alt="" />
                </div>
              </li>
              <li>
                <div>
                  <img src={tab1} alt="" />
                </div>
              </li>
              <li>
                <div>
                  <img src={tab1} alt="" />
                </div>
              </li>
              <li>
                <div>
                  <img src={tab1} alt="" />
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.case}>
            <ul
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              <li>
                <img src={case1} alt="" />
              </li>
              <li>
                <img src={case1} alt="" />
              </li>
              <li>
                <img src={case1} alt="" />
              </li>
              <li>
                <img src={case1} alt="" />
              </li>
              <li>
                <img src={case1} alt="" />
              </li>
              <li>
                <img src={case2} alt="" />
              </li>
            </ul>

            <div
              className={styles.btn_left}
              onClick={() => {
                handlePrev();
              }}
            >
              Previous
            </div>
            <div
              className={styles.btn_right}
              onClick={() => {
                handleNext();
              }}
            >
              Next
            </div>
          </div>
          <div className={styles.wall_list}>
            <ul className={styles.wall_list_ul} ref={trackRef}>
              <li>
                <img src={aliexpress} alt="" />
              </li>
              <li>
                <img src={booking} alt="" />
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
                <img src={netshort} alt="" />
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
                <img src={Tiktok} alt="" />
              </li>
              <li>
                <img src={UnicoStudioLogo} alt="" />
              </li>
              <li>
                <img src={Voodoo} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
