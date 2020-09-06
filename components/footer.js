import React from "react";
import styles from "style/footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>&#169; {year} Camden Phalen</p>
    </div>
  );
};

export default Footer;
