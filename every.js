const isBelow32 = function (temperature) {
  return temperature < 32;
};

const isBelow120 = function (unitsConsumed) {
  return unitsConsumed < 120;
};

const isBelow50 = function (rainfallData) {
  return rainfallData < 50;
};

const isBelow10 = function (value) {
  return value < 10;
};

const isAbove0 = function (value) {
  return value > 0;
};

const isAbove18 = function (age) {
  return age > 18;
};

const allTemperatureBelow32 = function() {
  const data = [[22, 23], [25, 24, 22], [29]];
  return data.flatMap(x => x).every(isBelow32);
}

const allPositive = function() {
  const data = [[3, 4], [5, 2], [1]];
  return data.flatMap(x => x).every(isAbove0);
}

const allUnitConsumedBelow120 = function() {
  const data = [[110, 115], [118], [109]];
  return data.flatMap(x => x).every(isBelow120);
}

const allRainfallDataBelow50 = function() {
  const data = [[30, 43], [15, 24], [15]];
  return data.flatMap(x => x).every(isBelow50);
}

const allAboveAge18 = function() {
  const data = [[30, 43], [37, 24], [19]];
  return data.flatMap(x => x).every(isAbove18);
}

const allDoneAtleast1 = function() {
  const data = [[3, 2], [6, 1], [6, 4, 8]];
  return data.flatMap(x => x).every(isAbove0);
}

const allItemsWeighBelow10 = function() {
  const data = [[3, 2], [6, 1], [6, 4, 8]];
  return data.flatMap(x => x).every(isBelow10);
}

const main = function() {
  console.log("7 => ", allUnitConsumedBelow120());
  console.log("29 => ", allTemperatureBelow32());
  console.log("33 => ", allRainfallDataBelow50());
  console.log("54 => ", allPositive());
  console.log("62 => ", allDoneAtleast1());
  console.log("72 => ", allAboveAge18());
  console.log("79 => ", allItemsWeighBelow10());
}

main();