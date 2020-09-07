import { equals, last } from "util/array";
import { useEffect, useState } from "react";

import { PageTitle as TitleTarget } from "state";

const TYPE_INTERVAL = 50;

const useTyper = () => {
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

  useEffect(() => {
    setIsDone(false);
    typeOnInterval();
  }, [last(target)]);
  useEffect(typeOnInterval, [current]);

  return current;
};

export default useTyper;
