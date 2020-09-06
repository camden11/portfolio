import Link from "next/link";
import React, { useState } from "react";

import { WorkIcon } from "components";
import styles from "style/workItem.module.css";
import { TextColor, BackgroundColor } from "state";
import Background from "./background";

const WorkItem = ({ item }) => {
  const [hover, setHover] = useState(false);

  const textColor = TextColor.useContainer();
  const backgroundColor = BackgroundColor.useContainer();

  const iconBackgroundColor = hover
    ? item.backgroundColorHover || item.backgroundColor
    : textColor.getColor();
  const iconColor = hover
    ? item.textColorHover || item.textColor
    : backgroundColor.getColor();
  return (
    <Link href={`/work/${item.id}`}>
      <a
        className="unstyled"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.workItem}>
          <WorkIcon
            workId={item.id}
            backgroundColor={iconBackgroundColor}
            iconColor={iconColor}
          />
          <div className={styles.workItemInfo}>
            <h4>{item.name}</h4>
            <p>{item.headline}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default WorkItem;
