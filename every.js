const isBelow32 = function (temperature) {
  return temperature < 32;
};

const isBelow120 = function (unitsConsumed) {
  return unitsConsumed < 120;
};

const isBelow50 = function (rainfallData) {
  return rainfallData < 50;
};

const isPositive = function (rainfallData) {
  return rainfallData > 0;
};

const isAbove18 = function (age) {
  return age > 18;
};

console.log("7 ->", [[22, 23], [25, 24, 22], [29]].flat().every(isBelow32));

console.log("29 ->", [[3, 4], [5, 2], [1]].flat().every(isPositive));

console.log("33 ->", [[110, 115], [118], [109]].flat().every(isBelow120));

console.log("54 ->", [[30, 43], [15, 24], [15]].flat().every(isBelow50));

console.log("62 ->", [[30, 43], [37, 24], [19]].flat().every(isAbove18));