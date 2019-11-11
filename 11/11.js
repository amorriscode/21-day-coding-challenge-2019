const busTimes = buses => {
  return Object.entries(buses)
    .reduce((obj, [key, { distance, speed }]) => {
      obj[key] = distance / speed;
      return obj;
    }, {});
}
