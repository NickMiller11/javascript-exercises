function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));
console.log(calculateBonus(1000, false));
console.log(calculateBonus(50000, true));
