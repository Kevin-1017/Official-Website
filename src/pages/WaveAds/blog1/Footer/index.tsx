import styles from "./index.module.scss";
import inimg from "../Public/in.webp";

function Footer() {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.linkedin.com/company/waveads-global/?viewAsMember=true"
        target="_blank"
      >
        <img src={inimg} alt="" />
      </a>
      <h3>Careers</h3>
      <p>Copyright © 2026 WaveAds. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
