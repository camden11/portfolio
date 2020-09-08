import React, { useState } from "react";

import { TextColor } from "state";
import { getSliderStyle } from "util/style";
import styles from "style/colorSlider.module.css";

const R = "r";
const G = "g";
const B = "b";

const ColorSlider = ({ stateContainer }) => {
  const [currentColor, setCurrentColor] = useState(R);
  const currentValue = stateContainer.color[currentColor];

  const textColor = TextColor.useContainer();

  const handleChange = ({ target: { value: newValue } }) => {
    stateContainer.setColor({
      ...stateContainer.color,
      [currentColor]: newValue,
    });
  };

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: getSliderStyle(styles.input, textColor.formattedColor),
        }}
      />
      <input
        type="range"
        className={styles.input}
        min={0}
        max={255}
        value={currentValue}
        onChange={handleChange}
      />
      <button onClick={() => setCurrentColor(R)}>R</button>
      <button onClick={() => setCurrentColor(G)}>G</button>
      <button onClick={() => setCurrentColor(B)}>B</button>
    </div>
  );
};

export default ColorSlider;
