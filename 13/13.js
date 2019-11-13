const lightsOn = function(lights) {
  return lights.map(light => ({ id: light.id, on: true }));
}

const lightsOff = function(lights) {
  return lights.map(light => ({ id: light.id, on: false }));
}

const toggleLights = function(lights, lightsAreOn) {
  return lightsAreOn
    ? lightsOff(lights)
    : lightsOn(lights);
}
  