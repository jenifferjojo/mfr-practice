const anySangDo = function (notes) {
  return notes.includes("do");
};

const anyDidTurn = function (steps) {
  return steps.includes("turn");
};

console.log("6 ->",[["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(anySangDo));

console.log("17 ->",[["step", "tap"], ["turn", "step"]].some(anyDidTurn));
