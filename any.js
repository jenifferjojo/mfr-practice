const isNoteDo = function (notes) {
  return notes.includes("do");
};

const isStepTurn = function (steps) {
  return steps.includes("turn");
};

const isNoteSo = function (notes) {
  return notes.includes("so");
};

const isNoteFa = function (notes) {
  return notes.includes("fa");
};

const isOver7 = function (measure) {
  return measure > 7;
};

const isEquals4 = function (value) {
  return value === 4;
};

const isEquals100 = function (value) {
  return value === 100;
};

const isWordExcellent = function (value) {
  return value.includes("excellent");
};

const isOver90 = function (mark) {
  return mark > 90;
};

const anySangDo = function() {
  const data = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
  return data.flat().some(isNoteDo);
}

const anySangSo = function() {
  const data = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
  return data.flat().some(isNoteSo);
}

const anyDidTurn = function() {
  const data = [["step", "tap"], ["turn", "step"]];
  return data.flat().some(isStepTurn);
}

const anyOver7 = function() {
  const data = [[5, 6], [7], [6]];
  return data.flat().some(isOver7);
}

const anyEquals4 = function() {
  const data = [[2, 3], [1], [4, 2]];
  return data.flat().some(isEquals4);
}

const anyWroteExcellent = function() {
  const data = [["excellent", "to", "meet", "you"], ["how", "are", "you"]];
  return data.flat().some(isWordExcellent);
}

const anyOver90 = function() {
  const data = [[82, 67, 91], [91, 78], [84, 52]];
  return data.flat().some(isOver90);
}

const anySangFa = function() {
  const data = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
  return data.flat().some(isNoteFa);
}

const anyEquals100 = function() {
  const data = [[92, 94, 93], [99, 94, 103], [102, 100]];
  return data.flat().some(isEquals100);
}

const main = function() {
  console.log("6 => ", anySangDo());
  console.log("12 => ", anySangSo());
  console.log("17 => ", anyDidTurn());
  console.log("40 => ", anyOver7());
  console.log("47 => ", anyEquals4());
  console.log("53 => ", anyWroteExcellent());
  console.log("61 => ", anyOver90());
  console.log("66 => ", anySangFa());
  console.log("71 => ", anyEquals100());
}

main();