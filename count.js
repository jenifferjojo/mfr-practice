const countBlues = function (count, value) {
  return value === "blue" ? count + 1 : count;
};

const countDune = function (count, book) {
  return book === "Dune" ? count + 1 : count;
};

console.log("1 ->",["red", "blue", "red", "green", "red", "blue"].reduce(countBlues, 0));

console.log("10 ->",["Dune", "Dune", "Foundation", "Dune"].reduce(countDune, 0));
