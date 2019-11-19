const pumpkinSpice = money => {
  const pumpkinGoods = [0, 0, 0, 0];
  let remainingMoney = money;
  
  while (remainingMoney >= 5) {
    pumpkinGoods[0] += 1;
    pumpkinGoods[3] += 30;
    remainingMoney -= 5;
  }
  
  while (remainingMoney >= 3) {
    pumpkinGoods[1] += 1;
    pumpkinGoods[3] += 15;
    remainingMoney -= 3;
  }
    
  while (remainingMoney >= 1) {
    pumpkinGoods[2] += 1;
    pumpkinGoods[3] += 3;
    remainingMoney -= 1;
  }
  
  return pumpkinGoods;
}