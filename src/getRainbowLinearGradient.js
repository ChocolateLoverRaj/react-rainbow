import getRainbowStops from './getRainbowStops';

const getRainbowLinearGradient = (saturation, lightness) =>
  `linear-gradient(to right, ${getRainbowStops(saturation, lightness).join(
    ', '
  )})`;

export default getRainbowLinearGradient;
