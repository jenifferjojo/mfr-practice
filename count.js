const countBlues = function (count, value) {
  return value === "blue" ? count + 1 : count;
};

const countDune = function (count, book) {
  return book === "Dune" ? count + 1 : count;
};

const countDeer = function (count, book) {
  return book === "deer" ? count + 1 : count;
};

const countChocolate = function (count, book) {
  return book === "chocolate" ? count + 1 : count;
};

const countTrack = function (count, book) {
  return book === "track1" ? count + 1 : count;
};

console.log("1 ->", ["red", "blue", "red", "green", "red", "blue"].reduce(countBlues, 0));

console.log("10 ->", ["Dune", "Dune", "Foundation", "Dune"].reduce(countDune, 0));

console.log("15 ->", ["deer", "deer", "rabbit", "deer"].reduce(countDeer, 0));

console.log("24 ->", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]].flat().reduce(countChocolate, 0));

console.log("35 ->", ["track1", "track2", "track1"].reduce(countTrack, 0));
