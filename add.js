const add = function (sum, value) {
  return sum + value;
};

const totalCandiesRefilled = function() {
  const data = [[5, 3], [2], [4, 1]];
  return data.flat().reduce(add);
}

const totalMiles = function() {
  const data = [[2, 3, 2], [4], [1, 1]];
  return data.flat().reduce(add);
}

const totalCrateWeights = function() {
  const data = [[4, 6], [2, 3, 1], [5]];
  return data.flat().reduce(add);
}

const totalLiters = function() {
  const data = [[1, 2, 1], [3], [2]];
  return data.flat().reduce(add);
}

const totalCranes = function() {
  const data = [[3, 2], [1], [4]];
  return data.flat().reduce(add);
}

const totalPens = function() {
  const data = [[2, 3], [1], [3, 2]];
  return data.flat().reduce(add);
}

const totalRepetitions = function() {
  const data = [[10, 20], [5], [15, 10]];
  return data.flat().reduce(add);
}

const totalPages = function() {
  const data = [[12, 10], [5], [8, 7]];
  return data.flat().reduce(add);
}

const totalStandWeights = function() {
  const data = [[4, 3], [2], [3, 1]];
  return data.flat().reduce(add);
}

const totalLaps = function() {
  const data = [[2, 3, 2], [1], [4]];
  return data.flat().reduce(add);
}

const totalRoutines = function() {
  const data = [[6, 4], [3, 2]];
  return data.flat().reduce(add);
}

const totalCandies = function() {
  const data = [[1, 2, 3], [2]];
  return data.flat().reduce(add);
}

const totalPassengers = function() {
  const data = [[10, 12], [15]];
  return data.flat().reduce(add);
}

const totalGroceryQuantity = function() {
  const data = [[3, 5], [2, 1]];
  return data.flat().reduce(add);
}

const totalCoinsCollected = function() {
  const data = [[1, 1, 2], [2, 1]];
  return data.flat().reduce(add);
}

const combineWords = function() {
  const data = [["hi", "nice", "to", "meet", "you"], ["how", "are", "you"], ["good", "bye"]];
  return data.flat().reduce(add);
}

const totalPushups = function() {
  const data = [[3, 5], [2, 1], [1, 1, 2], [2, 1]];
  return data.flat().reduce(add);
}

const distanceCycleCovered = function() {
  const data = [[3, 5], [2, 1], [2, 1]];
  return data.flat().reduce(add);
}

const totalParcelWeights = function() {
  const data = [[3, 5], [2, 9], [4, 4]];
  return data.flat().reduce(add);
}

const main = function() {
  console.log("5 => ", totalCandiesRefilled());
  console.log("8 => ", totalMiles());
  console.log("13 => ", totalCrateWeights());
  console.log("18 => ", totalLiters());
  console.log("19 => ", totalCranes());
  console.log("21 => ", totalPens());
  console.log("26 => ", totalRepetitions());
  console.log("28 => ", totalPages());
  console.log("30 => ", totalStandWeights());
  console.log("34 => ", totalLaps());
  console.log("39 => ", totalRoutines());
  console.log("41 => ", totalCandies());
  console.log("44 => ", totalPassengers());
  console.log("45 => ", totalGroceryQuantity());
  console.log("49 => ", totalCoinsCollected());
  console.log("52 => ", combineWords());
  console.log("56 => ", totalPushups());
  console.log("59 => ", distanceCycleCovered());
  console.log("67 => ", totalParcelWeights());
}

main();
