/*Ryan Postma
 * CMP237
 * exam 2 
 * problem 1 in modify code
 */

var stock = "1 lemon, 2 cabbages, and 101 eggs, and 150 limes";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  if (amount >= 100) {// check for 100 or over
	  amount = "zillions of ";// print for the check
  }
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
print(stock.replace(/(\d+) (\w+)/g, minusOne));
