const anySangDo = function (notes) {
  return notes.includes("do");
};

const anyDidTurn = function (steps) {
  return steps.includes("turn");
};

const anySangSo = function (steps) {
  return steps.includes("so");
};

console.log("6 ->",[["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(anySangDo));

console.log("12 ->",[["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(anySangSo));

console.log("17 ->",[["step", "tap"], ["turn", "step"]].some(anyDidTurn));
