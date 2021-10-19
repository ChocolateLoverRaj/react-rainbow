import React from 'react';
import { Children, cloneElement } from 'react';
import getRainbowLinearGradient from './getRainbowLinearGradient';

const RainbowBackgroundGradient = ({
  saturation = 1,
  lightness = 0.5,
  children,
  offset = 0,
}) => {
  if (typeof children !== 'string') Children.only(children);

  const style = {
    backgroundImage: getRainbowLinearGradient(saturation, lightness, offset),
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <>
      {typeof children === 'string' ? (
        <span style={style}>{children}</span>
      ) : (
        cloneElement(children, {
          style: {
            ...children.props.style,
            ...style,
          },
        })
      )}
    </>
  );
};

export default RainbowBackgroundGradient;
