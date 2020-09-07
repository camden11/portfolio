import Link from "next/link";
import React, { useState } from "react";

import { WorkIcon } from "components";
import styles from "style/workItem.module.css";
import { TextColor, BackgroundColor } from "state";

const TRANSITION_TIME = 300;

const WorkItem = ({ item }) => {
  const [hover, setHover] = useState(false);
  const [transition, setTransition] = useState(false);
  const [timeoutRef, setTimeoutRef] = useState(null);

  const onHover = () => {
    setHover(true);
    setTransition(true);
  };

  const onLeave = () => {
    setHover(false);
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }
    const nextTimeoutRef = setTimeout(() => {
      setTransition(false);
    }, TRANSITION_TIME);
    setTimeoutRef(nextTimeoutRef);
  };

  const textColor = TextColor.useContainer();
  const backgroundColor = BackgroundColor.useContainer();

  const iconBackgroundColor = hover
    ? item.backgroundColorHover || item.backgroundColor
    : textColor.color;
  const iconColor = hover
    ? item.textColorHover || item.textColor
    : backgroundColor.color;

  const transitionStyle = transition
    ? `background-color 0.${TRANSITION_TIME}s, fill 0.${TRANSITION_TIME}s`
    : "none";
  return (
    <Link href={`/work/${item.id}`}>
      <a className="unstyled" onMouseEnter={onHover} onMouseLeave={onLeave}>
        <div
          className={styles.workItem}
          style={{ transition: transitionStyle }}
        >
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
