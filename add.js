const add = function (sum, value) {
  return sum + value;
};

console.log("5 ->",[[5, 3], [2], [4, 1]].flatMap(x => x).reduce(add));

console.log("8 ->",[[2, 3, 2], [4], [1, 1]].flatMap(x => x).reduce(add));

console.log("13 ->",[[4, 6], [2, 3, 1], [5]].flatMap(x => x).reduce(add));
