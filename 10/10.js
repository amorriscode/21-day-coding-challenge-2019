const whereCanIPark = (spots, vehicle) => {
  const spotsForVehicle = {
    regular: ['R'],
    small: ['R', 'S'],
    motorcycle: ['R', 'S', 'M'],
  };
  
  for (i = 0; i < spots.length; i++) {
    for (j = 0; j < spots.length; j++) {
      if (spotsForVehicle[vehicle].includes(spots[i][j])) {
        return [j, i];
      }
    }
  }
  
  return false;
}
