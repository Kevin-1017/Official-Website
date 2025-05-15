import React from "react";
import styles from "./index.module.scss"; // 可选的样式文件

interface FooterProps {
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({
  style,
  contentStyle,
  textStyle,
  copyright,
}) => {
  return (
    <footer className={styles.footer} style={style}>
      <div className={styles.footer_content} style={contentStyle}>
        <p style={textStyle}>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
