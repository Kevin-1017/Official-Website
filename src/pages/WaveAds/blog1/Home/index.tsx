import styles from "./index.module.scss";
import TabList from "../Tab";

import brand from "../Public/brand.jpg";
import team1 from "../Public/team1.jpg";
import team2 from "../Public/team2.jpg";
import team3 from "../Public/team3.jpeg";

import Footer from "../Footer/index";
import ContactUs from "../ContactUs";

import Wall from "../Wall";
{
  window.$t("");
}
function Home() {
  return (
    <div className={styles.home}>
      <TabList />
      <div className={styles.banner_home}>
        <h1>{window.$t("The Digital Wave Rider")}</h1>
        <p>
          {window.$t(
            "Empowering mobile growth through user acquisition, re-targeting, ASO solutions to maximize app success"
          )}
        </p>
      </div>
      <div className={styles.container}>
        <h1>{window.$t("Brand Introduction")}</h1>
        <div className={styles.brand}>
          <img src={brand} alt="" />
          <div className={styles.brand_right}>
            <p>
              {window.$t(
                "Founded in 2017, WaveAds is headquartered in LA. It is a leading global mobile growth platform dedicated to driving media synergy through Al technology. We provide developers with intelligent growth solutions that span User Acquisition, Re-targeting, ASO, traffic monetization, and full life-cycle management."
              )}
            </p>
          </div>
        </div>
        <div className={styles.team}>
          <h1> {window.$t("Global Team")}</h1>
          <ul>
            <li>
              <div>
                <img src={team1} alt="" />
                <p>{window.$t("Garry")}</p>
                <p>{window.$t("Head of SEA")}</p>
              </div>
            </li>
            <li>
              <div>
                <img src={team2} alt="" />
                <p>{window.$t("Ayrton Neto")}</p>
                <p>{window.$t("Head of LATAM")}</p>
              </div>
            </li>
            <li>
              <div>
                <img src={team3} alt="" />
                <p>{window.$t("Lee")}</p>
                <p>{window.$t("Head of East Asia")}</p>
              </div>
            </li>
          </ul>
        </div>
        <Wall />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
