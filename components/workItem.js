import { BackgroundColor, TextColor } from "state";
import React from "react";

import Link from "next/link";
import { WorkIcon } from "components";
import { formatColor } from "util/color";
import styles from "style/workItem.module.css";
import { useHoverTransition } from "hooks";

const TRANSITION_TIME = 300;

const WorkItem = ({ item }) => {
  const { hover, onHover, onLeave, transition } = useHoverTransition(
    TRANSITION_TIME
  );

  const textColor = TextColor.useContainer();
  const backgroundColor = BackgroundColor.useContainer();

  const iconBackgroundColor = hover
    ? formatColor(item.backgroundColorHover || item.backgroundColor)
    : textColor.formattedColor;
  const iconColor = hover
    ? formatColor(item.textColorHover || item.textColor)
    : backgroundColor.formattedColor;

  const transitionStyle = transition
    ? `background-color ${TRANSITION_TIME / 1000}s, fill ${
        TRANSITION_TIME / 1000
      }s`
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
