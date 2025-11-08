const countBlues = function (count, value) {
  return value === "blue" ? count + 1 : count;
};

const countDune = function (count, book) {
  return book === "Dune" ? count + 1 : count;
};

const unique = function (alreadySeen, currentSeen) {
  if (!alreadySeen.includes(currentSeen)) {
    alreadySeen.push(currentSeen); 
  }
    
  return alreadySeen;
};

const add = function (sum, value) {
  return sum + value;
};

const anySangDo = function (notes) {
  return notes.includes("do");
};

const anyDidTurn = function (steps) {
  return steps.includes("turn");
};

const isBelow32 = function (temperature) {
  return temperature < 32;
};