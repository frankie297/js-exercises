// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the first item matching `valueToRemove` removed
// TIP: Use the .indexOf() method

function remove(arr, valueToRemove) {
  const newArray = arr.slice(0);
  const indexToRemove = newArray.indexOf(valueToRemove, 0);
  if (indexToRemove > -1){
    newArray.splice(indexToRemove, 1);
  } // complete this statement
  return newArray;
}

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, "Ashleigh");

console.log(newNumbers);
console.log(newNames);

/*
  EXPECTED RESULT
  ---------------
  [1, 3]
  [Irina, Mozafar]
*/
