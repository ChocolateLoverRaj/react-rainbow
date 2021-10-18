const getGradientValues = (hues, saturation, lightness) =>
  hues
    .map((h) => `hsl(${h}, ${saturation * 100}%, ${lightness * 100}%)`)
    .join(', ');

export default getGradientValues;
