import getRainbowStops from './getRainbowStops';

const getRainbowConicGradient = (saturation, lightness) =>
  `conic-gradient(${getRainbowStops(saturation, lightness).join(', ')})`;

export default getRainbowConicGradient;
