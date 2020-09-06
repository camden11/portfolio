import React from "react";

import { BackgroundColor } from "state";
import SVGS from "svgs";

const SVG = ({ workId }) => {
  const SVGComponent = SVGS[workId];
  const backgroundColor = BackgroundColor.useContainer();
  return <SVGComponent fill={backgroundColor.getColor()} />;
};

export default SVG;
