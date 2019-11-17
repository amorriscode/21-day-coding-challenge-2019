const judgeVegetable = (vegetables, metric) => {
  let highest = 0;
  let highestSubmitter = null;
  
  vegetables.forEach(vegetable => {
    if (vegetable[metric] > highest) {
      highest = vegetable[metric];
      highestSubmitter = vegetable.submitter;
    }
  });
  
  return highestSubmitter;
}
