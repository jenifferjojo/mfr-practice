const anySangDo = function (notes) {
  return notes.includes("do");
};

const anyDidTurn = function (steps) {
  return steps.includes("turn");
};

const anySangSo = function (notes) {
  return notes.includes("so");
};

const anySangFa = function (notes) {
  return notes.includes("fa");
};

const isOver7 = function (measure) {
  return measure > 7;
};

const isEquals4 = function (value) {
  return value === 4;
};

const anyWroteExcellent = function (value) {
  return value.includes("excellent");
};

const isOver90 = function (mark) {
  return mark > 90;
};

console.log("6 ->",[["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(anySangDo));

console.log("12 ->",[["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(anySangSo));

console.log("17 ->",[["step", "tap"], ["turn", "step"]].some(anyDidTurn));

console.log("40 ->",[[5, 6], [7], [6]].flat().some(isOver7));

console.log("47 ->",[[2, 3], [1], [4, 2]].flat().some(isEquals4));

console.log("53 ->",[["excellent", "to", "meet", "you"], ["how", "are", "you"]].some(anyWroteExcellent));

console.log("61 ->",[[82, 67, 91], [91, 78], [84, 52]].flat().some(isOver90));

console.log("12 ->",[["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(anySangFa));