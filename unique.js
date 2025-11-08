const unique = function (alreadySeen, currentSeen) {
  if (!alreadySeen.includes(currentSeen)) {
    alreadySeen.push(currentSeen); 
  }
    
  return alreadySeen;
};

console.log("2 ->",[["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flat().reduce(unique, []));

console.log("3 ->",["sparrow", "crow", "sparrow", "eagle", "crow"].reduce(unique, []));

console.log("4 ->",[["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]].flat().reduce(unique, []));

console.log("9 ->",[["blue", "yellow"], ["yellow", "green"], ["blue"]].flat().reduce(unique, []));

console.log("11 ->",[["rice", "lentils"], ["rice"], ["curd", "lentils"]].flat().reduce(unique, []));

console.log("14 ->",["small", "large", "medium", "small"].reduce(unique, []));

console.log("16 ->",[[1, 2], [3], [2, 4, 1]].flat().reduce(unique, []));

console.log("20 ->",[["apple", "banana"], ["apple"], ["apple", "orange"]].flat().reduce(unique, []));

console.log("22 ->",[["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]].flat().reduce(unique, []));

console.log("23 ->",["A", "B", "A", "C", "B"].reduce(unique, []));

console.log("25 ->",[["rose", "lily"], ["lily", "tulip"]].flat().reduce(unique, []));
