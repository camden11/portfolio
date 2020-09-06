import React from "react";

import { TextColor } from "state";

const ColorControl = ({ children }) => {
  const textColor = TextColor.useContainer();
  return <div style={{ color: textColor.getColor() }}>{children}</div>;
};

export default ColorControl;
