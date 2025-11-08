const add = function (sum, value) {
  return sum + value;
};

console.log("5 ->",[[5, 3], [2], [4, 1]].flat().reduce(add));

console.log("8 ->",[[2, 3, 2], [4], [1, 1]].flat().reduce(add));

console.log("13 ->",[[4, 6], [2, 3, 1], [5]].flat().reduce(add));

console.log("18 ->",[[1, 2, 1], [3], [2]].flat().reduce(add));

console.log("19 ->",[[3, 2], [1], [4]].flat().reduce(add));

console.log("21 ->",[[2, 3], [1], [3, 2]].flat().reduce(add));
