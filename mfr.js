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

const isBelow32 = function (temperature) {
  return temperature < 32;
};

console.log("1 ->",["red", "blue", "red", "green", "red", "blue"].reduce(countBlues, 0));

console.log("2 ->",[["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flatMap(x => x).reduce(unique, []));

console.log("3 ->",["sparrow", "crow", "sparrow", "eagle", "crow"].reduce(unique, []));

console.log("4 ->",[["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]].flatMap(x => x).reduce(unique, []));

console.log("5 ->",[[5, 3], [2], [4, 1]].flatMap(x => x).reduce(add));

console.log("6 ->",[["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(anySangDo));

console.log("7 ->",[[22, 23], [25, 24, 22], [29]].flatMap(x => x).every(isBelow32));

console.log("8 ->",[[2, 3, 2], [4], [1, 1]].flatMap(x => x).reduce(add));

console.log("9 ->",[["blue", "yellow"], ["yellow", "green"], ["blue"]].flatMap(x => x).reduce(unique, []));

console.log("10 ->",["Dune", "Dune", "Foundation", "Dune"].reduce(countDune, 0));

console.log("11 ->",[["rice", "lentils"], ["rice"], ["curd", "lentils"]].flatMap(x => x).reduce(unique, []));