import { BackgroundColor, TextColor } from "state";
import React, { useState } from "react";

import styles from "style/colorSlider.module.css";

const R = "r";
const G = "g";
const B = "b";

const ColorSlider = ({ stateContainer }) => {
  const [currentColor, setCurrentColor] = useState(R);
  const currentValue = stateContainer.color[currentColor];

  const { formattedColor: textColor } = TextColor.useContainer();
  const { formattedColor: backgroundColor } = BackgroundColor.useContainer();

  const handleChange = ({ target: { value: newValue } }) => {
    stateContainer.setColor({
      ...stateContainer.color,
      [currentColor]: newValue,
    });
  };

  return (
    <div className={styles.colorSliderContainer}>
      <input
        type="range"
        className={styles.input}
        min={0}
        max={255}
        value={currentValue}
        onChange={handleChange}
      />
      {[R, G, B].map((color, index) => (
        <button
          key={index}
          onClick={() => setCurrentColor(color)}
          className={styles.button}
          style={{
            backgroundColor:
              color === currentColor ? textColor : backgroundColor,
            borderColor: textColor,
            color: color === currentColor ? backgroundColor : textColor,
            left: index * -2,
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorSlider;
