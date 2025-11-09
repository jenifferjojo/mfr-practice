const countBlue = function (count, value) {
  return value === "blue" ? count + 1 : count;
};

const countDune = function (count, book) {
  return book === "Dune" ? count + 1 : count;
};

const countDeer = function (count, animal) {
  return animal === "deer" ? count + 1 : count;
};

const countChocolate = function (count, flavor) {
  return flavor === "chocolate" ? count + 1 : count;
};

const countTrack1 = function (count, track) {
  return track === "track1" ? count + 1 : count;
};

const countBanana = function (count, fruit) {
  return fruit === "banana" ? count + 1 : count;
};

const countRed = function (count, color) {
  return color === "red" ? count + 1 : count;
};

const countPhonetic = function (count, sound) {
  return sound === "sa" ? count + 1 : count;
};

const countRainMention = function (count, entry) {
  return entry.includes("rain") ? count + 1 : count;
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

const countRainMentions = function () {
  const data = [["sunny", "rain",], ["cloudy", "rain"], ["sunny", "cloudy"]];
  return data.reduce(countRainMention, 0);
}

const main = function() {
  console.log("1 => ", countBlues());
  console.log("10 => ", countDunes());
  console.log("15 => ", countDeers());
  console.log("24 => ", countChocolates());
  console.log("35 => ", countTracke1s());
  console.log("51 => ", countBananas());
  console.log("76 => ", countPhonetics());
  console.log("82 => ", countRainMentions());
}

main();
