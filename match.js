/* Ryan Postma
 * CMP237
 * exam 2
 * problem 2 in modify code
 */

var input = "A string with 7 numbers in it... 42 and 88, 123 and 16, 4 and 22.";
var number = /\b(\d\d)\b/g;//modified so that it only grabs 2 digits
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
