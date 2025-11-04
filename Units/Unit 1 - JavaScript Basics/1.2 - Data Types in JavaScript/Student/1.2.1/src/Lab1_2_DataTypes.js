/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age = 34;
console.log("Age: ", age)

let price = 12.99
console.log('Price: ', price);
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
let sandra = "Sandra"
console.log(sandra / 2) // NaN
console.log("Sandra" / 2) // NaN

// TODO 2: Print basic math ops: + - * /
console.log("2 + 2 = ", 2 + 2) // 4
console.log("4 - 2 = ", 4 - 2) // 2
console.log("3 * 2 = ", 3 * 2) // 6
console.log("6 / 2 = ", 6 / 2) // 3

// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log("3 ** 2 = ", 3 ** 2) // 9
// TODO 3: Assignment operators with score variable
console.log("7 % 2 = ", 7 % 2)
// TODO 4: Expressions with operator precedence
let score = 10;
score += 5;
// score = score + 5
score -= 3
// score = score - 3
score *= 8
// score = score * 8
score /= 2
// score = score / 2

// TODO 5: Strings (single, double, backticks)
let myAge = 17;
console.log("I am " + myAge + " years old")
console.log(`I am ${myAge} years old.`)

// TODO 6: String properties and methods
let greeting = "Hello there!";
// - greeting.length
console.log("Greeting length: ", greeting.length);
// - charAt(0), charAt(5), [3]
console.log(greeting.charAt(0))
console.log(greeting.charAt(5))
console.log(greeting[4])
// - indexOf("sad")
let phrase = "Don't be sad be happy!";
console.log(phrase.indexOf("sad"))
// - repeat()
console.log(phrase.repeat(3))
// - substring, substr, slice examples
console.log(phrase.substring(0, 4))
console.log(phrase.slice(-9))

// 🚀 Stretch Goals
// - Even number check using %
for (let i = 10; i > 0; i--) {
    if (i % 2 == 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}
// - localeCompare() example

let city1 = "Berlin";
let city2 = "Miami";

console.log(city1.localeCompare(city2)); // returns negative value because "Berlin" comes before "Miami" alphabetically
console.log(city2.localeCompare(city1)); // returns positive value because "Miami" comes after "Berlin" alphabetically
console.log(city1.localeCompare("Berlin")); // returns 0 because both strings are identical

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   I learned about different data types in JavaScript such as numbers and strings, as well as various operations that can be performed on them.
   2. What challenges did you encounter, and how did you solve them?
   Understanding operator precedence was a bit challenging, but I reviewed the order of operations and practiced with examples to get a better grasp.
   3. Where else could this programming concept be useful?
   These concepts are fundamental in programming and can be applied in various scenarios such as data manipulation, calculations, and user input handling in web development.
   =========================================================== */   