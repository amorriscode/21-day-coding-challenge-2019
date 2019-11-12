const checkAir = function (samples, threshold) {
  const dirtySamples = samples.filter(sample => sample === 'dirty');
  return (dirtySamples.length / samples.length) < threshold
    ? 'Clean'
    : 'Polluted';
}
