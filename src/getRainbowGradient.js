import gradientFns from './gradientFns';

const getRainbowGradient = (type, saturation, lightness, offset) =>
  gradientFns[type](saturation, lightness, offset);

export default getRainbowGradient;
