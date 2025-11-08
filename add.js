const add = function (sum, value) {
  return sum + value;
};

console.log("5 ->",[[5, 3], [2], [4, 1]].flat().reduce(add));

console.log("8 ->",[[2, 3, 2], [4], [1, 1]].flat().reduce(add));

console.log("13 ->",[[4, 6], [2, 3, 1], [5]].flat().reduce(add));

console.log("18 ->",[[1, 2, 1], [3], [2]].flat().reduce(add));

console.log("19 ->",[[3, 2], [1], [4]].flat().reduce(add));

console.log("21 ->",[[2, 3], [1], [3, 2]].flat().reduce(add));

console.log("26 ->",[[10, 20], [5], [15, 10]].flat().reduce(add));

console.log("28 ->",[[12, 10], [5], [8, 7]].flat().reduce(add));

console.log("30 ->",[[4, 3], [2], [3, 1]].flat().reduce(add));

console.log("34 ->",[[2, 3, 2], [1], [4]].flat().reduce(add));

console.log("39 ->",[[6, 4], [3, 2]].flat().reduce(add));

console.log("41 ->",[[1, 2, 3], [2]].flat().reduce(add));

console.log("44 ->",[[10, 12], [15]].flat().reduce(add));

console.log("45 ->",[[3, 5], [2, 1]].flat().reduce(add));

console.log("49 ->",[[1, 1, 2], [2, 1]].flat().reduce(add));

console.log("52 ->",[["hi", "nice", "to", "meet", "you"], ["how", "are", "you"], ["good", "bye"]].flat().reduce(add));
