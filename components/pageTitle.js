import React, { useState, useEffect } from "react";

import { last, equals } from "util/array";
import { PageTitle as TitleTarget } from "state";
import styles from "style/pageTitle.module.css";

const TYPE_INTERVAL = 50;

const PageTitle = () => {
  const [current, setCurrent] = useState([""]);
  const [intervalRef, setIntervalRef] = useState(null);

  const { pageTitle: target, setIsDone } = TitleTarget.useContainer();

  const shouldBackspace = () => {
    if (current.length > target.length) return true;
    return (
      last(current) !==
      target[current.length - 1].substring(0, last(current).length)
    );
  };

  const typeOnInterval = () => {
    if (intervalRef) {
      clearInterval(intervalRef);
    }
    const currentIntervalRef = setTimeout(typeStep, TYPE_INTERVAL);
    setIntervalRef(currentIntervalRef);
  };

  const typeStep = () => {
    if (shouldBackspace()) {
      backspace();
    } else {
      if (!equals(current, target)) {
        type();
      } else {
        clearInterval(intervalRef);
        setIsDone(true);
      }
    }
  };

  const backspace = () => {
    const sectionindex = current.length - 1;
    const nextCurrent = [...current];
    nextCurrent[sectionindex] = last(current).substring(
      0,
      last(current).length - 1
    );
    if (last(nextCurrent).length === 0) {
      setCurrent(nextCurrent.slice(0, sectionindex));
    } else {
      setCurrent(nextCurrent);
    }
  };

  const type = () => {
    const sectionindex = current.length - 1;
    if (last(current) === target[sectionindex]) {
      setCurrent([...current, ""]);
    } else {
      const nextCurrent = [...current];
      nextCurrent[sectionindex] = target[sectionindex].substring(
        0,
        last(current).length + 1
      );
      setCurrent(nextCurrent);
    }
  };

  useEffect(typeOnInterval, [last(target)]);
  useEffect(typeOnInterval, [current]);

  return <h2 className={styles.navText}>{current.join(" / ")}</h2>;
};

export default PageTitle;
