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
}) => {
  Children.only(children);

  return (
    <>
      {cloneElement(children, {
        style: {
          ...children.props.style,
          borderImage: `${getRainbowGradient(type, saturation, lightness)} 1`,
          borderStyle: 'solid',
        },
      })}
    </>
  );
};

export default RainbowBorderImage;
