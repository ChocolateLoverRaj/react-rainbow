import getRainbowStops from './getRainbowStops';

const getRainbowConicGradient = (saturation, lightness, offset) =>
  `conic-gradient(${getRainbowStops(saturation, lightness, offset).join(
    ', '
  )})`;

export default getRainbowConicGradient;
