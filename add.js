const add = function (sum, value) {
  return sum + value;
};

const totalCandiesRefilled = function() {
  const data = [[5, 3], [2], [4, 1]];
  return data.flatMap(x => x).reduce(add);
};

const totalMiles = function() {
  const data = [[2, 3, 2], [4], [1, 1]];
  return data.flatMap(x => x).reduce(add);
};

const totalCrateWeights = function() {
  const data = [[4, 6], [2, 3, 1], [5]];
  return data.flatMap(x => x).reduce(add);
};

const totalLiters = function() {
  const data = [[1, 2, 1], [3], [2]];
  return data.flatMap(x => x).reduce(add);
};

const totalCranes = function() {
  const data = [[3, 2], [1], [4]];
  return data.flatMap(x => x).reduce(add);
};

const totalPens = function() {
  const data = [[2, 3], [1], [3, 2]];
  return data.flatMap(x => x).reduce(add);
};

const totalRepetitions = function() {
  const data = [[10, 20], [5], [15, 10]];
  return data.flatMap(x => x).reduce(add);
};

const totalPages = function() {
  const data = [[12, 10], [5], [8, 7]];
  return data.flatMap(x => x).reduce(add);
};

const totalStandWeights = function() {
  const data = [[4, 3], [2], [3, 1]];
  return data.flatMap(x => x).reduce(add);
};

const totalLaps = function() {
  const data = [[2, 3, 2], [1], [4]];
  return data.flatMap(x => x).reduce(add);
};

const totalRoutines = function() {
  const data = [[6, 4], [3, 2]];
  return data.flatMap(x => x).reduce(add);
};

const totalCandies = function() {
  const data = [[1, 2, 3], [2]];
  return data.flatMap(x => x).reduce(add);
};

const totalPassengers = function() {
  const data = [[10, 12], [15]];
  return data.flatMap(x => x).reduce(add);
};

const totalGroceryQuantity = function() {
  const data = [[3, 5], [2, 1]];
  return data.flatMap(x => x).reduce(add);
};

const totalCoinsCollected = function() {
  const data = [[1, 1, 2], [2, 1]];
  return data.flatMap(x => x).reduce(add);
};

const combineWords = function() {
  const data = [["hi", "nice", "to", "meet", "you"], ["how", "are", "you"], ["good", "bye"]];
  return data.flatMap(x => x).reduce(add);
};

const totalPushups = function() {
  const data = [[3, 5], [2, 1], [1, 1, 2], [2, 1]];
  return data.flatMap(x => x).reduce(add);
};

const distanceCycleCovered = function() {
  const data = [[3, 5], [2, 1], [2, 1]];
  return data.flatMap(x => x).reduce(add);
};

const totalParcelWeights = function() {
  const data = [[3, 5], [2, 9], [4, 4]];
  return data.flatMap(x => x).reduce(add);
};

const totalHoursPracticed = function() {
  const data = [[3, 5], [5], [4, 4]];
  return data.flatMap(x => x).reduce(add);
};

const combineSyllablesUsed = function() {
  const data = [["an", "in"], ["an", "la"], ["ma", "la"]];
  return data.flatMap(x => x).reduce(add);
};

const combinePoemFragments = function() {
  const data = [["live", "happy"], ["live", "long"], ["without", "regrets"]];
  return data.flatMap(x => x).reduce(add);
};

const totalPointsScored = function() {
  const data = [[20, 35], [54, 67], [73, 85]];
  return data.flatMap(x => x).reduce(add);
};

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
  console.log("74 => ", totalHoursPracticed());
  console.log("77 => ", combineSyllablesUsed());
  console.log("83 => ", combinePoemFragments());
  console.log("85 => ", totalPointsScored());
}

main();
