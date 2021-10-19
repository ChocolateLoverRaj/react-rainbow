const getRainbowStops = (saturation, lightness, offset) => {
  const stops = [];
  offset *= 360;
  for (let i = -offset; i <= 360 - offset; i += 60) {
    stops.push(`hsl(${i}, ${saturation * 100}%, ${lightness * 100}%)`);
  }
  return stops;
};

export default getRainbowStops;
