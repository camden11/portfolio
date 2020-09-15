import React from "react";
import content from "content/nav";
import styles from "style/footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>&#169; {year} Camden Phalen</p>
      <a
        target="_blank"
        href={content.footerSourceUrl}
        className={styles.footerText}
      >
        {content.footerSourceText}
      </a>
    </div>
  );
};

export default Footer;
