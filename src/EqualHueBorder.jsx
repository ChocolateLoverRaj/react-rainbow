import React from 'react';
import { Children, useEffect } from 'react';
import useSize from 'use-size-hook';
import getGradientValues from './getGradientValues';
import rangeWithMultiples from './rangeWithMultiples';

const EqualHueBorder = ({
  saturation,
  lightness,
  children,
  borderWidth,
  roundedCorners = false,
  offset = 0,
}) => {
  Children.only(children);

  const [widthRef, { width }] = useSize();
  const [heightRef, { height }] = useSize();
  const horizontalBorderArea = width * borderWidth;
  const verticalBorderArea = height * borderWidth;
  const cornerArea = roundedCorners
    ? (borderWidth ** 2 * Math.PI) / 4
    : borderWidth ** 2;
  const totalArea =
    // Top and bottom borders
    horizontalBorderArea * 2 +
    // Left and right borders
    verticalBorderArea * 2 +
    // Corners
    cornerArea * 4;
  let h = -offset * 360;
  const horizontalHues = (horizontalBorderArea / totalArea) * 360;
  h += -horizontalHues / 2;
  const cornerHues = (cornerArea / totalArea) * 360;
  const verticalHues = (verticalBorderArea / totalArea) * 360;
  const topGradient = `linear-gradient(to right, ${getGradientValues(
    rangeWithMultiples(60, h, h + horizontalHues),
    saturation,
    lightness
  )})`;
  h += horizontalHues;
  const topRightGradient = `conic-gradient(from 0deg at 0% 100%, ${getGradientValues(
    rangeWithMultiples(60, h, h + cornerHues),
    saturation,
    lightness
  )})`;
  h += cornerHues;
  const rightGradient = `linear-gradient(to bottom, ${getGradientValues(
    rangeWithMultiples(60, h, h + verticalHues),
    saturation,
    lightness
  )})`;
  h += verticalHues;
  const bottomRightGradient = `conic-gradient(from 90deg at 0% 0%, ${getGradientValues(
    rangeWithMultiples(60, h, h + cornerHues),
    saturation,
    lightness
  )})`;
  h += cornerHues;
  const bottomGradient = `linear-gradient(to left, ${getGradientValues(
    rangeWithMultiples(60, h, h + horizontalHues),
    saturation,
    lightness
  )})`;
  h += horizontalHues;
  const bottomLeftGradient = `conic-gradient(from 180deg at 100% 0%, ${getGradientValues(
    rangeWithMultiples(60, h, h + cornerHues),
    saturation,
    lightness
  )})`;
  h += cornerHues;
  const leftGradient = `linear-gradient(to top, ${getGradientValues(
    rangeWithMultiples(60, h, h + verticalHues),
    saturation,
    lightness
  )})`;
  h += verticalHues;
  const topLeftGradient = `conic-gradient(from 270deg at 100% 100%, ${getGradientValues(
    rangeWithMultiples(60, h, h + cornerHues),
    saturation,
    lightness
  )})`;

  const borderRadius = roundedCorners ? borderWidth : undefined;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `${borderWidth}px max-content ${borderWidth}px`,
        gridTemplateRows: `${borderWidth}px max-content ${borderWidth}px`,
      }}
    >
      <div
        style={{
          background: topLeftGradient,
          borderTopLeftRadius: borderRadius,
        }}
      />
      <div ref={widthRef} style={{ background: topGradient }} />
      <div
        style={{
          background: topRightGradient,
          borderTopRightRadius: borderRadius,
        }}
      />
      <div ref={heightRef} style={{ background: leftGradient }} />
      {children}
      <div style={{ background: rightGradient }} />
      <div
        style={{
          background: bottomLeftGradient,
          borderBottomLeftRadius: borderRadius,
        }}
      />
      <div style={{ background: bottomGradient }} />
      <div
        style={{
          background: bottomRightGradient,
          borderBottomRightRadius: borderRadius,
        }}
      />
    </div>
  );
};

export default EqualHueBorder;
