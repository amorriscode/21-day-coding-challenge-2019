const finalPosition = moves => {
  const paradeLocation = [0, 0];
  const directions = {
    north: { index: 1, value: 1 },
    east: { index: 0, value: 1 },
    south: { index: 1, value: -1 },
    west: { index: 0, value: -1 },
  };
  
  moves.forEach(move => {
    const direction = directions[move];
    paradeLocation[direction.index] += direction.value;
  });
  
  return paradeLocation;
}
