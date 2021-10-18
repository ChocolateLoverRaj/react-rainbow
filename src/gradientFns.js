import getRainbowLinearGradient from './getRainbowLinearGradient';
import getRainbowConicGradient from './getRainbowConicGradient';

const gradientFns = {
  linear: getRainbowLinearGradient,
  conic: getRainbowConicGradient,
};

export default gradientFns;
