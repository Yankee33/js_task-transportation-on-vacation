/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePrice = 40;
  const longTerm = 7;
  const longTermMoney = 50;
  const shortTerm = 20;

  if (days >= longTerm) {
    return basePrice * days - longTermMoney;
  }

  if (days >= 3 && days <= 6) {
    return basePrice * days - shortTerm;
  }

  if (days <= 2) {
    return basePrice * days;
  }
}

module.exports = calculateRentalCost;
