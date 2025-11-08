const unique = function(alreadySeen, currentSeen) {
  for (const element of currentSeen) {
    if (!alreadySeen.includes(element)) {
      alreadySeen.push(element); 
    }
  }

  // currentSeen.fliter( element => !alreadySeen.includes(element) );
    
  return alreadySeen;
}

console.log("2 ->",[["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].reduce(unique));
