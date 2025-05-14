import React from "react";
import styles from "./index.module.scss"; // 可选的样式文件

interface FooterProps {
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ style, contentStyle, textStyle }) => {
  return (
    <footer className={styles.footer} style={style}>
      <div className={styles.footer_content} style={contentStyle}>
        <p style={textStyle}>Copyright © 2026 Kuponz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
