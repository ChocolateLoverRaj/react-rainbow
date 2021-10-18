import gradientFns from './gradientFns';

const getRainbowGradient = (type, saturation, lightness) =>
  gradientFns[type](saturation, lightness);

export default getRainbowGradient;
