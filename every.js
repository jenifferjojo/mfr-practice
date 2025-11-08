const isBelow32 = function (temperature) {
  return temperature < 32;
};

console.log("7 ->",[[22, 23], [25, 24, 22], [29]].flatMap(x => x).every(isBelow32));