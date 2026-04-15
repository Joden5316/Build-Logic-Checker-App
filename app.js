// 1. Declare variable
let truthyOrFalsy = true;

// 2. Check truthiness
console.log(Boolean(truthyOrFalsy));

// 3. Change to non-empty string
truthyOrFalsy = "freeCodeCamp";
console.log(Boolean(truthyOrFalsy));

// 4. Change to falsy value (empty string)
truthyOrFalsy = "";
console.log(Boolean(truthyOrFalsy));



// 5. New variable
let hasDeveloperJob = true;

// 6. If statement
if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

// 7 Another variable
let isTimmyAGamer = false;

// 8. If statement
if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

// Age condition
let timmyAge = 18;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}

// Change age 
timmyAge = 14;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}
