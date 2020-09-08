import React from "react";
import { classNames } from "util/style";
import styles from "style/image.module.css";

const Image = ({ src, alt }) => {
  return (
    <div className={classNames(["filter", "with-color"])}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default Image;
