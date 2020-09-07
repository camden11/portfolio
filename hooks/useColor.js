import { BackgroundColor, TextColor } from "state";

import { useEffect } from "react";

const useColor = (textColor, backgroundColor, dependancies = []) => {
  const { setColor: setTextColor } = TextColor.useContainer();
  const { setColor: setBackgroundColor } = BackgroundColor.useContainer();

  useEffect(() => {
    setTextColor(textColor);
    setBackgroundColor(backgroundColor);
  }, dependancies);
};

export default useColor;
