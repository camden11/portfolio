import React, { useState } from "react";

const Slider = ({ min = 0, max = 255, defaultValue = 0, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = ({ target: { value: newValue } }) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Slider;
