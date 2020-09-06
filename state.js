import { useState } from "react";
import { createContainer } from "unstated-next";

const useTextColor = (initialState = { r: 0, g: 0, b: 0 }) => {
  const [color, setColor] = useState(initialState);
  const getColor = () => `rgb(${color.r}, ${color.g}, ${color.b})`;
  return { getColor, setColor };
};

export const TextColor = createContainer(useTextColor);

const useBackgroundColor = (initialState = { r: 0, g: 0, b: 0 }) => {
  const [color, setColor] = useState(initialState);
  const getColor = () => `rgb(${color.r}, ${color.g}, ${color.b})`;
  return { getColor, setColor };
};

export const BackgroundColor = createContainer(useBackgroundColor);
