import styles from "./index.module.scss";
import TabList from "../Tab";
import brand from "../Public/brand.jpg";
import Footer from "../Footer/index";
// import Wall from "../Wall";
import { teamData } from "./config";
// import AnimatedComponent from "@/components/Animation";
{
  window.$t("");
}
function Home() {
  return (
    <div className={styles.home}>
      <TabList />

      <div
        className={styles.banner_home}
        style={{
          backgroundPosition: "center",
        }}
      >
        {/* <AnimatedComponent animationType="slide_left">
          <div className={styles.banner_home_text}>
            <h1>{window.$t("The Digital Wave Rider")}</h1>
            <p>
              {window.$t(
                "Empowering mobile growth through user acquisition, re-targeting, ASO solutions to maximize app success"
              )}
            </p>
          </div>
        </AnimatedComponent> */}
      </div>

      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={brand} alt="" />
          {/* <AnimatedComponent animationType="slide_right">
            <div className={styles.brand_right}>
              <h1>{window.$t("Brand Introduction")}</h1>
              <p>
                {window.$t(
                  "Founded in 2017, WaveAds is headquartered in LA. It is a leading global mobile growth platform dedicated to driving media synergy through Al technology. We provide developers with intelligent growth solutions that span User Acquisition, Re-targeting, ASO, traffic monetization, and full life-cycle management."
                )}
              </p>
            </div>
          </AnimatedComponent> */}
        </div>
        <div className={styles.team}>
          <h1> {window.$t("Global Team")}</h1>

          <ul>
            {/* {teamData.map((item, index) => (
              <AnimatedComponent animationType="appear">
                <li style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
                  <div>
                    <div className={styles.team_top}></div>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                    <span>{item.name}</span>
                  </div>
                </li>
              </AnimatedComponent>
            ))} */}
          </ul>
        </div>
        {/* <Wall /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
