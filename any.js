const anySangDo = function (notes) {
  return notes.includes("do");
};

const anyDidTurn = function (steps) {
  return steps.includes("turn");
};

const anySangSo = function (notes) {
  return notes.includes("so");
};

const anyOver7 = function (measure) {
  return measure > 7;
};

const anyEquals4 = function (value) {
  return value === 4;
};

console.log("6 ->",[["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(anySangDo));

console.log("12 ->",[["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(anySangSo));

console.log("17 ->",[["step", "tap"], ["turn", "step"]].some(anyDidTurn));

console.log("40 ->",[[5, 6], [7], [6]].flat().some(anyOver7));

console.log("47 ->",[[2, 3], [1], [4, 2]].flat().some(anyEquals4));
