const finalPosition = moves => {
  const paradeLocation = [0, 0];
  const directions = {
    north: 1,
    east: 1,
    south: -1,
    west: -1,
  };
  
  moves.forEach(move => {
    if (move === 'north' || move === 'south') {
      paradeLocation[1] += directions[move];
    } else {
      paradeLocation[0] += directions[move];
    }
  });
  
  return paradeLocation;
}
