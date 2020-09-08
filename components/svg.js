import { BackgroundColor } from "state";
import React from "react";
import SVGS from "svgs";

const SVG = ({ workId, color }) => {
  const SVGComponent = SVGS[workId];
  const backgroundColor = BackgroundColor.useContainer();
  const fill = color || backgroundColor.formattedColor;
  return <SVGComponent fill={fill} />;
};

export default SVG;
