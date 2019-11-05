const chooseStations = stations => stations
  .filter(station => station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre'))
  .map(station => station[0]);
