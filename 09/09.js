const carPassing = (cars, speed) => {
  return [
    ...cars,
    {
      speed,
      time: Date.now(),
    }
  ];
}
  