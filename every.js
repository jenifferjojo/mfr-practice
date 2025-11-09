const isBelow32 = function (temperature) {
  return temperature < 32;
};

const isBelow120 = function (unitsConsumed) {
  return unitsConsumed < 120;
};

const isBelow50 = function (rainfallData) {
  return rainfallData < 50;
};

const isAbove0 = function (rainfallData) {
  return rainfallData > 0;
};

const isAbove18 = function (age) {
  return age > 18;
};

const isOver0 = function (taskDone) {
  return taskDone > 0;
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

const allAbove18 = function() {
  const data = [[30, 43], [37, 24], [19]];
  return data.flatMap(x => x).every(isAbove18);
}

const allOver0 = function() {
  const data = [[3, 2], [6, 1], [6, 4, 8]];
  return data.flatMap(x => x).every(isOver0);
}

const main = function() {
  console.log("7 => ", allUnitConsumedBelow120());
  console.log("29 => ", allTemperatureBelow32());
  console.log("33 => ", allRainfallDataBelow50());
  console.log("54 => ", allPositive());
  console.log("62 => ", allOver0());
  console.log("72 => ", allAbove18());
}

main();