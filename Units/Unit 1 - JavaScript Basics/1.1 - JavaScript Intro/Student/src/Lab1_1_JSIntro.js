/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Brody Dennis")

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak";
favoriteFood = "Pizza";


// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello";
console.log(typeof mystery);
mystery = 42; 
console.log(typeof mystery);
// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";

// TODO 5: Create three valid camelCase variables and print them
let quarterback;
let pointGuard;

pointGuard = "LeBron James"; // initialize
let classRoom = "L12" // Declare and initialize


// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 18;
console.log("I am " + age + " years old.");
console.log(`I am ${age} years old.`);
/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   How to declar and initialize variables
   2. What challenges did you encounter, and how did you solve them?
   Using camelCase and also making sure to use const and let correctly
   3. Where else could this programming concept be useful?
   the real world when it comes to being structured
   =========================================================== */


   // Mini FRQ - Lab 1.1

   let width = 10;
   let height = 6;
  
  // Computing area and perimeter


   let area = width * height;
   let perimeter = 2 * (width + height);
   
   console.log (`The area is ${area}`) //template literals
   console.log ("The perimeter is " + perimeter); //string
