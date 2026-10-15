/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const concatString1half = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " ";
const concatString2half = s3 + " " + s2 + " " + s1 + " " + s4;

// I myself got BRAIN TWISTED formulating that solution :sob:

// Print out the concatenated string

console.log(concatString1half + concatString2half);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const upperPart1 = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
const upperPart2 = part2.slice(0, -1) + part2.slice(-1).toUpperCase();

// Print the cameLtaiL-formatted string

console.log(upperPart1 + upperPart2);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tip = 0.15 * billTotal; 

// Print out the tipAmount

console.log(tip);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const RNG = (Math.round(Math.random() * 10 + 1));

// Print the generated random number

console.log(RNG);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:

const expression1 = a && b; //false
console.log(expression1)

const expression2 = a || b; //true
console.log(expression2)

const expression3 = !a && b; //false
console.log(expression3)

const expression4 = !(a && b); //true
console.log(expression4)

const expression5 = !a || !b; //false
console.log(expression5)

const expression6 = !(a || b); //false
console.log(expression6)

const expression7 = a && a; //true
console.log(expression7)