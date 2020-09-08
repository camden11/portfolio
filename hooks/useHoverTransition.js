import { useState } from "react";

// Necessary to avoid delay of color changes when using color sliders
const useHoverTransition = (transitionTime) => {
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
    }, transitionTime);
    setTimeoutRef(nextTimeoutRef);
  };

  return { hover, onHover, onLeave, transition };
};

export default useHoverTransition;
