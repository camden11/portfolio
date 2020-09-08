export const classNames = (names) =>
  names.reduce((acc, name) => `${acc} ${name}`, ``);

export const getSliderStyle = (className, color) =>
  `.${className}[type="range"]::-webkit-slider-thumb { background-color: ${color}; } .${className}[type="range"]::-webkit-slider-runnable-track { box-shadow: inset 0 -2px 0 0 ${color}};`;
