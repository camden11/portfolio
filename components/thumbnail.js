import React from "react";
import { classNames } from "util/style";
import styles from "style/thumbnail.module.css";

const Thumbnail = ({ item }) => {
  return (
    <div
      className={classNames([
        "filter",
        "with-color",
        "with-hover",
        styles.thumbnailFilter,
      ])}
    >
      <div
        className={styles.thumbnail}
        style={{ backgroundImage: `url(${item.src})` }}
      />
    </div>
  );
};

export default Thumbnail;
