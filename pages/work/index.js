import React from "react";
import { useColor } from "hooks";

const TEXT_COLOR = { r: 0, g: 0, b: 0 };
const BACKGROUND_COLOR = { r: 255, g: 255, b: 255 };

const WorkIndexPage = () => {
  useColor(TEXT_COLOR, BACKGROUND_COLOR);
  return <p>Work index page</p>;
};

export default WorkIndexPage;
