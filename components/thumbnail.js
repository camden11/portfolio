import React from "react";
import { classNames } from "util/style";
import styles from "style/thumbnail.module.css";
import { useHoverTransition } from "hooks";

const TRANSITION_TIME = 300;

const Thumbnail = ({ item }) => {
  const { onHover, onLeave, transition } = useHoverTransition(TRANSITION_TIME);

  const transitionStyle = transition
    ? `background-color ${TRANSITION_TIME / 1000}s`
    : "none";

  return (
    <div
      className={classNames([
        "filter",
        "with-color",
        "with-hover",
        styles.thumbnailFilter,
      ])}
      style={{ transition: transitionStyle }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={styles.thumbnail}
        style={{ backgroundImage: `url(${item.src})` }}
      />
    </div>
  );
};

export default Thumbnail;
