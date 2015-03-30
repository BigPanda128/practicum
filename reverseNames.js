/*Ryan Postma
 * CMP237
 * exam 2
 * problem 4 modify code section
 * exra credit
 */

//edited reg exp so that it takes middle initial
print(
  "Hopper, Grace M.\nMcCarthy, John\nRitchie, Dennis"
    .replace(/([\w ]+), ([\w ]+) ([\w ]+)g/, "$2 $3 $1"));
