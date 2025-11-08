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

const countBanana = function (count, book) {
  return book === "banana" ? count + 1 : count;
};

const countRed = function (count, book) {
  return book === "red" ? count + 1 : count;
};

console.log("1 ->", ["red", "blue", "red", "green", "red", "blue"].reduce(countBlues, 0));

console.log("10 ->", ["Dune", "Dune", "Foundation", "Dune"].reduce(countDune, 0));

console.log("15 ->", ["deer", "deer", "rabbit", "deer"].reduce(countDeer, 0));

console.log("24 ->", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]].flat().reduce(countChocolate, 0));

console.log("35 ->", ["track1", "track2", "track1"].reduce(countTrack, 0));

console.log("51 ->", ["grapes", "banana", "apple", "banana"].reduce(countBanana, 0));

console.log("58 ->", [["red", "blue",], ["blue", "yellow"], ["red", "red"]].flat().reduce(countRed, 0));
