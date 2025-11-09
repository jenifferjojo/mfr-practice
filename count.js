const countBlue = function (count, value) {
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

const countTrack1 = function (count, book) {
  return book === "track1" ? count + 1 : count;
};

const countBanana = function (count, book) {
  return book === "banana" ? count + 1 : count;
};

const countRed = function (count, book) {
  return book === "red" ? count + 1 : count;
};

const countPhonetic = function (count, book) {
  return book === "sa" ? count + 1 : count;
};

const countBlues = function () {
  const data = ["red", "blue", "red", "green", "red", "blue"];
  return data.reduce(countBlue, 0);
}

const countDunes = function () {
  const data = ["Dune", "Dune", "Foundation", "Dune"];
  return data.reduce(countDune, 0);
}

const countDeers = function () {
  const data = ["deer", "deer", "rabbit", "deer"];
  return data.reduce(countDeer, 0);
}

const countChocolates = function () {
  const data = [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]];
  return data.flatMap(x => x).reduce(countChocolate, 0);
}

const countTracke1s = function () {
  const data = ["track1", "track2", "track1"];
  return data.reduce(countTrack1, 0);
}

const countBananas = function () {
  const data = ["grapes", "banana", "apple", "banana"];
  return data.reduce(countBanana, 0);
}

const countReds = function () {
  const data = [["red", "blue",], ["blue", "yellow"], ["red", "red"]];
  return data.flatMap(x => x).reduce(countRed, 0);
}

const countPhonetics = function () {
  const data = [["sa", "ae",], ["th", "aa"], ["sa", "aa"]];
  return data.flatMap(x => x).reduce(countPhonetic, 0);
}

const main = function() {
  console.log("1 => ", countBlues());
  console.log("10 => ", countDunes());
  console.log("15 => ", countDeers());
  console.log("24 => ", countChocolates());
  console.log("35 => ", countTracke1s());
  console.log("51 => ", countBananas());
  console.log("76 => ", countPhonetics());
}

main();
