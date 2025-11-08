const unique = function (alreadySeen, currentSeen) {
  if (!alreadySeen.includes(currentSeen)) {
    alreadySeen.push(currentSeen); 
  }
    
  return alreadySeen;
};

console.log("2 ->",[["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flatMap(x => x).reduce(unique, []));

console.log("3 ->",["sparrow", "crow", "sparrow", "eagle", "crow"].reduce(unique, []));

console.log("4 ->",[["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]].flatMap(x => x).reduce(unique, []));

console.log("9 ->",[["blue", "yellow"], ["yellow", "green"], ["blue"]].flatMap(x => x).reduce(unique, []));

console.log("11 ->",[["rice", "lentils"], ["rice"], ["curd", "lentils"]].flatMap(x => x).reduce(unique, []));

console.log("14 ->",["small", "large", "medium", "small"].reduce(unique, []));

console.log("16 ->",[[1, 2], [3], [2, 4, 1]].flatMap(x => x).reduce(unique, []));
