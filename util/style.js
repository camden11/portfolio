export const classNames = (names) =>
  names.reduce((acc, name) => `${acc} ${name}`, ``);

export const getSliderStyle = (color) =>
  `
    input[type="range"]::-webkit-slider-thumb { 
      background-color: ${color}; 
    } 
    
    input[type="range"]::-webkit-slider-runnable-track { 
      box-shadow: inset 0 -2px 0 0 ${color};
    }

    input[type="range"]::-moz-range-thumb {
      background-color: ${color}; 
    }

    input[type="range"]::-moz-range-track {
      box-shadow: inset 0 -2px 0 0 ${color};
    }

    input[type="range"]::-ms-thumb {
      background-color: ${color}; 
    }

    input[type="range"]::-ms-track {
      box-shadow: inset 0 -2px 0 0 ${color};
    }
  `;
