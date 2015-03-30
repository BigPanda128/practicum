//edited reg exp so that it takes middle initial
print(
  "Hopper, Grace M.\nMcCarthy, John\nRitchie, Dennis"
    .replace(/([\w ]+), ([\w ]+) ([\w ]+)g/, "$2 $3 $1"));
