// DRY !== BETTER
const getPumpkinGoods = (pumpkinGoods, goodIndex, cost, spiceAmount, remainingMoney) => {
  let localMoney = remainingMoney;
  
  while (remainingMoney >= cost) {
    pumpkinGoods[goodIndex] += 1;
    pumpkinGoods[3] += spiceAmount;
    localMoney -= cost;
  }
  
  return localMoney;
}

const pumpkinSpice = money => {
  const pumpkinGoods = [0, 0, 0, 0];
  let remainingMoney = money;
  
  remainingMoney = getPumpkinGoods(pumpkinGoods, 0, 5, 30, remainingMoney);
  
  remainingMoney = getPumpkinGoods(pumpkinGoods, 1, 3, 15, remainingMoney);
  
  remainingMoney = getPumpkinGoods(pumpkinGoods, 1, 1, 3, remainingMoney);
  
  return pumpkinGoods;
}
