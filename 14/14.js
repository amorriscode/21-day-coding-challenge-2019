const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let cost = 1;
  cost += distanceTraveled * 0.25;
  if (numberOfPeople >= 30) {
    cost += 0.25;
  }
  
  return `$${cost.toFixed(2)}`;
}
