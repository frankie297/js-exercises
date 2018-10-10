// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

//i changed the value to a boolean not a string, and changed the variable to const so it's more stable
const isHappy = false;

// i changed the if statement to a conditional ternary operator, so it is cleaner code.
return isHappy ? console.log("I am happy") : console.log("I am not happy");

/*
  EXPECTED RESULT
  ---------------
  I am not happy
*/
