import getRainbowStops from './getRainbowStops';

const getRainbowLinearGradient = (saturation, lightness, offset) =>
  `linear-gradient(to right, ${getRainbowStops(
    saturation,
    lightness,
    offset
  ).join(', ')})`;

export default getRainbowLinearGradient;
