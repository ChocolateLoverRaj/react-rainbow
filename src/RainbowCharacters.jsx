import React from 'react';

const RainbowCharacters = ({
  children,
  saturation = 1,
  lightness = 0.5,
  style,
  offset = 0,
}) => {
  return (
    <>
      {[...children].map((char, index) => (
        <span
          key={`${index}: ${char}`}
          style={{
            ...style,
            color: `hsl(${(index / children.length - offset) * 360}, ${
              saturation * 100
            }%, ${lightness * 100}%)`,
          }}
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default RainbowCharacters;
