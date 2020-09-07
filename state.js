import { useState } from "react";
import { createContainer } from "unstated-next";
import React from "react";

const useTextColor = (initialState = { r: 0, g: 0, b: 0 }) => {
  const [color, setColor] = useState(initialState);
  const formattedColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  return { color: formattedColor, setColor };
};

export const TextColor = createContainer(useTextColor);

const useBackgroundColor = (initialState = { r: 255, g: 255, b: 255 }) => {
  const [color, setColor] = useState(initialState);
  const formattedColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  return { color: formattedColor, setColor };
};

export const BackgroundColor = createContainer(useBackgroundColor);

const usePageTitle = (
  initialTitle = ["Camden Phalen"],
  initialDone = false
) => {
  const [pageTitle, setPageTitle] = useState(initialTitle);
  const [isDone, setIsDone] = useState(initialDone);
  return { pageTitle, setPageTitle, isDone, setIsDone };
};

export const PageTitle = createContainer(usePageTitle);

const StateProvider = ({ children }) => (
  <TextColor.Provider>
    <BackgroundColor.Provider>
      <PageTitle.Provider>{children}</PageTitle.Provider>
    </BackgroundColor.Provider>
  </TextColor.Provider>
);

export default StateProvider;
