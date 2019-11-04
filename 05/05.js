const chooseStations = stations => stations.reduce((acc, currVal) => {
  return currVal[1] >= 20
    && (currVal[2] === 'school' || currVal[2] === 'community centre')
    ? [...acc, currVal[0]]
    : [...acc];
}, []);
