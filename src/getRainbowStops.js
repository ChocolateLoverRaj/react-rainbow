const getRainbowStops = (saturation, lightness) => {
  const stops = [];
  for (let i = 0; i <= 360; i += 60) {
    stops.push(`hsl(${i}, ${saturation * 100}%, ${lightness * 100}%)`);
  }
  return stops;
};

export default getRainbowStops;
