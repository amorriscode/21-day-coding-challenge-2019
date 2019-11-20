// Use the value below whenever you need the value of Pi

const PI = 3.14159 

const sphereVolume = function (radius) {
  console.log('r', radius);
  console.log((4/3) * PI * Math.pow(10, 3))
  return (4/3) * PI * Math.pow(radius, 3);
}

const coneVolume = function (radius, height) {
  return (1/3) * PI * Math.pow(radius, 2) * height;
}

const prismVolume = function (height, width, depth) {
  return (width * depth) * height;
}

const solidFunctions = {
  sphere: sphereVolume,
  cone: coneVolume,
  prism: prismVolume,
}

const totalVolume = function (solids) {
  let totalVolume = 0;
  
  solids.forEach(solid => {
    const { type, radius, height, width, depth } = solid;
    let args = [radius];
    
    if (type === 'cone') {
      args = [radius, height];
    } else if (type === 'prism') {
      args = [height, width, depth];
    }
    
    totalVolume += solidFunctions[type](...args);
  });
  
  return totalVolume;
}
