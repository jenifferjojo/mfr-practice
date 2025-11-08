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

console.log("27 ->",[["A", "B"], ["B", "C"], ["A"]].flat().reduce(unique, []));

console.log("31 ->",[["idli", "vada"], ["vada", "upma"]].flat().reduce(unique, []));

console.log("32 ->",[["sunset", "bird"], ["river"], ["sunset"]].flat().reduce(unique, []));

console.log("36 ->",[["cheese", "bread"], ["tomato"], ["bread"]].flat().reduce(unique, []));

console.log("37 ->",[["sky", "blue"], ["night"], ["sky", "dark"]].flat().reduce(unique, []));

console.log("38 ->",[["toy", "sticker"], ["candy", "sticker"]].flat().reduce(unique, []));

console.log("42 ->",[["Tom", "Jerry"], ["Jerry", "Spike"]].flat().reduce(unique, []));

console.log("43 ->",[["Vega", "Sirius"], ["Vega", "Rigel"]].flat().reduce(unique, []));

console.log("46 ->",[["mint", "ginger"], ["lemon"], ["mint"]].flat().reduce(unique, []));

console.log("48 ->",[["pencil", "charcoal"], ["ink"], ["pencil"]].flat().reduce(unique, []));

console.log("50 ->",[["salt", "pepper"], ["turmeric"], ["salt"]].flat().reduce(unique, []));

console.log("55 ->",[["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]].flat().reduce(unique, []));
