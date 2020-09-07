import React from "react";
import { SVG } from "components";
import { TextColor } from "state";
import styles from "style/workIcon.module.css";

const WorkIcon = ({ workId, backgroundColor, iconColor }) => {
  const textColor = TextColor.useContainer();
  return (
    <div
      className={styles.icon}
      style={{ backgroundColor: backgroundColor || textColor }}
    >
      <SVG workId={workId} color={iconColor} />
    </div>
  );
};

export default WorkIcon;
