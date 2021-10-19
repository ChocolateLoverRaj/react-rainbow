import React from 'react';
import { Children, cloneElement } from 'react';
import getRainbowConicGradient from './getRainbowConicGradient';
import getRainbowGradient from './getRainbowGradient';
import getRainbowGradient from './getRainbowGradient';

const RainbowBorderImage = ({
  children,
  saturation = 1,
  lightness = 0.5,
  type = 'conic',
  offset = 0,
}) => {
  Children.only(children);

  return (
    <>
      {cloneElement(children, {
        style: {
          ...children.props.style,
          borderImage: `${getRainbowGradient(
            type,
            saturation,
            lightness,
            offset
          )} 1`,
          borderStyle: 'solid',
        },
      })}
    </>
  );
};

export default RainbowBorderImage;
