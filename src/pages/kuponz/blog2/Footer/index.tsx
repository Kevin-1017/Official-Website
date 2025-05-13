import React from "react";
import "./index.scss"; // 可选的样式文件

interface FooterProps {
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ style, contentStyle, textStyle }) => {
  return (
    <footer className={`footer`} style={style}>
      <div className={`footer-content`} style={contentStyle}>
        <p className={`footer-text`} style={textStyle}>
          Copyright © 2026 Kuponz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
