const unique = function (alreadySeen, currentSeen) {
  const data = alreadySeen.slice();

  if (!data.includes(currentSeen)) {
    data.push(currentSeen); 
  }
    
  return data;
};

const spottedConstellations = function() {
  const data = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const spottedBirds = function() {
  const data = ["sparrow", "crow", "sparrow", "eagle", "crow"];
  return data.reduce(unique, []);
}

const studentsPresent = function() {
  const data = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const colorsUsed = function() {
  const data = [["blue", "yellow"], ["yellow", "green"], ["blue"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const ingredientsUsed = function() {
  const data = [["rice", "lentils"], ["rice"], ["curd", "lentils"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const sizesUsed = function() {
  const data = ["small", "large", "medium", "small"];
  return data.reduce(unique, []);
}

const chaptersCompleted = function() {
  const data = [[1, 2], [3], [2, 4, 1]];
  return data.flatMap(x => x).reduce(unique, []);
}

const fruitsUsed = function() {
  const data = [["apple", "banana"], ["apple"], ["apple", "orange"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const moviesWatched = function() {
  const data = [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const attendees = function() {
  const data = ["A", "B", "A", "C", "B"];
  return data.reduce(unique, []);
}

const flowersUsed = function() {
  const data = [["rose", "lily"], ["lily", "tulip"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const stationsAnnounced = function() {
  const data = [["A", "B"], ["B", "C"], ["A"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const snacksServed = function() {
  const data = [["idli", "vada"], ["vada", "upma"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const themes = function() {
  const data = [["sunset", "bird"], ["river"], ["sunset"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const ingredientsNeeded = function() {
  const data = [["cheese", "bread"], ["tomato"], ["bread"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const wordsUsed = function() {
  const data = [["sky", "blue"], ["night"], ["sky", "dark"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const giftItemsUsed = function() {
  const data = [["toy", "sticker"], ["candy", "sticker"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const participants = function() {
  const data = [["Tom", "Jerry"], ["Jerry", "Spike"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const starsSeen = function() {
  const data = [["Vega", "Sirius"], ["Vega", "Rigel"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const uniqueFlavors = function() {
  const data = [["mint", "ginger"], ["lemon"], ["mint"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const toolsUsed = function() {
  const data = [["pencil", "charcoal"], ["ink"], ["pencil"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const spicesUsed = function() {
  const data = [["salt", "pepper"], ["turmeric"], ["salt"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const moviesMentioned = function() {
  const data = [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const birdsSpotted = function() {
  const data = ["sparrow", "crow", "sparrow", "eagle", "crow"];
  return data.reduce(unique, []);
}

const flavoursAvailable = function() {
  const data = [["chocolate", "vanilla"], ["strawberry", "vanilla"], ["chocolate"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const recipeIngredients = function() {
  const data = [["salt", "egg"], ["water", "salt"], ["egg"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const toppingsChoosed = function() {
  const data = [["olives", "cheese"], ["cheese", "pepperoni"], ["olives"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const colorsSwatched = function() {
  const data = [["red", "green"], ["green", "blue"], ["yellow", "red"]];
  return data.flatMap(x => x).reduce(unique, []);
}

const main = function() {
  console.log("2 => ", spottedConstellations());
  console.log("3 => ", spottedBirds());
  console.log("4 => ", studentsPresent());
  console.log("9 => ", colorsUsed());
  console.log("11 => ", ingredientsUsed());
  console.log("14 => ", sizesUsed());
  console.log("16 => ", chaptersCompleted());
  console.log("20 => ", fruitsUsed());
  console.log("22 => ", moviesWatched());
  console.log("23 => ", attendees());
  console.log("25 => ", flowersUsed());
  console.log("27 => ", stationsAnnounced());
  console.log("31 => ", snacksServed());
  console.log("32 => ", themes());
  console.log("36 => ", ingredientsNeeded());
  console.log("37 => ", wordsUsed());
  console.log("38 => ", giftItemsUsed());
  console.log("42 => ", participants());
  console.log("43 => ", starsSeen());
  console.log("46 => ", uniqueFlavors());
  console.log("48 => ", toolsUsed());
  console.log("50 => ", spicesUsed());
  console.log("55 => ", moviesMentioned());
  console.log("57 => ", birdsSpotted());
  console.log("60 => ", flavoursAvailable());
  console.log("63 => ", recipeIngredients());
  console.log("68 => ", toppingsChoosed());
  console.log("70 => ", colorsSwatched());
}

main();