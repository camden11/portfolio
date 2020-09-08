import { BackgroundColor, TextColor } from "state";

import React from "react";
import styles from "style/image.module.css";

const Image = ({ src }) => {
  const { formattedColor: textColor } = TextColor.useContainer();
  // const { formattedColor: backgroundColor } = BackgroundColor.useContainer();
  // if (
  //   textColor === "rgb(0, 0, 0)" &&
  //   backgroundColor === "rgb(255, 255, 255)"
  // ) {
  //   return <img src={src} className={styles.imageUnfiltered} />;
  // }
  return (
    <div style={{ backgroundColor: textColor }} className={styles.filter}>
      <img src={src} className={styles.image} />
    </div>
  );
};

export default Image;
