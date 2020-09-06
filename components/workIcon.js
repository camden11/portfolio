import React from "react";

import { TextColor } from "state";
import styles from "style/workIcon.module.css";
import { SVG } from "components";

const WorkIcon = ({ workId }) => {
  const textColor = TextColor.useContainer();
  return (
    <div
      className={styles.icon}
      style={{ backgroundColor: textColor.getColor() }}
    >
      <SVG workId={workId} />
    </div>
  );
};

export default WorkIcon;
