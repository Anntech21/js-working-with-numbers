/********************** Exercise 1  **********************/
// Describe the following code:

let wholesalePrice = 5.45;
console.log(wholesalePrice);
let retailPrice = 9.99;
console.log(retailPrice);
let quantity = 47;
console.log(quantity);
let salesTotal = retailPrice * quantity;
console.log(salesTotal);
let profit = salesTotal - (wholesalePrice * quantity);
console.log(profit);

//its quantifing the profit

// Where might this code be used?
//This code might be used to build a POS system for retail companies, frontend backend interface.

// Run this code and log the profit variable in the console. What answer do you get? 
console.log($ + profit);
//213.38;

// How would you change this code to make the value of the quantity variable dynamic?

userInput = prompt("Enter an amount");
let dq = parseFloat(userInput);
console.log(dq);

/********************** Exercise 2 - Operators **********************/
// Step 1: Calculate the sum of two numbers and log the result.
let num1 = 5;
let num2 = 4;

let num3 = num1 + num2;
console.log(num3);
9;

// Step 2: Calculate the difference between two numbers and print the result.
let num4 = num1 - num2;
console.log(num4);

// Step 3: Calculate the product of two numbers and print the result.
let num5 = num1 * num2;
console.log(num5);

// Step 4: Calculate the result of dividing two numbers and print the result. Handle division by zero.

num5 = 100 / 5;
console.log(num5);
let num6 = 20 / 0;
console.log(num6);

//(I GOT CARRIED AWAY INTO PERCENTAGE)
let artScore = 60;
let craftScore = 76;
let twoScore = artScore + craftScore;
console.log(twoScore);
let twoSubjectScore = 200;
console.log(twoSubjectScore);

let twoSubjectTotalScore = (twoScore * 100) / twoSubjectScore;
let twoSubjectPercentage = twoSubjectTotalScore + "%";
console.log(twoSubjectPercentage);
("68%");

// Step 5: Check if a given number is even and print the result.

let num = 17;
num % 2;
console.log(num % 2);
// num is odd
let num2 = 16;
num2 % 2;
console.log(num2 % 2);
// num2 is even

/********************** Exercise 3 - Decades Calculator **********************/
// Store your current age into a variable.
// Store a maximum age into a variable (10 years older than you are now).
// Store an estimated number of meals you should eat per day (as a number).
// Calculate how many you would eat total for the next decade.
// Output the result to the screen like so: "You will need [AMOUNT] meals to last you until the age of [AGE]".

let currentAge = 39;
let futureAge = 49;
let mealsPerDay = 4;
let mealsPerYear = mealsPerDay * 365;
console.log(mealsPerYear);
let mealsPerDecade = mealsPerYear * 10;
console.log(
  "You will need " +
    mealsPerDecade +
    " meals to last you until the age of " +
    futureAge
);

/********************** Exercise 4 - PEMDAS **********************/
// You are working on an education app and you want to be able to provide the average scores for students.
// Here are the stored variables for a student and their subjects.

let mathScore = 90;
let scienceScore = 85;
let englishScore = 80;
let historyScore = 95;

// How would you get the average of their scores using JavaScript?

let totalAverage = mathScore + scienceScore + englishScore + historyScore;
let averageNum = 4;
let averageRatio = totalAverage / averageNum;
console.log(" The average score for this student is " + averageRatio);

/********************** Exercise 5 - Weather Converter **********************/
// Write a calculation that converts celsius to fahrenheit. To get the value of fahrenheit, you have to multiply the celsius value by 9/5 and then add 32.

// Prompt the user for the value of the temperature in celcius.
userInputCelsius = prompt("enter a temperature in degrees celsius");

userInputCelsius = parseFloat(userInputCelsius);

fahrenheit = (userInputCelsius * 9) / 5 + 32;

console.log(userInputCelsius + "°C" + " is equal to " + fahrenheit + "°F");

or 
if (!isNaN(celsius)) {

  const fahrenheit = (celsius * 9/5) + 32;
  
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
  } else {
  console.log("Invalid input. Please enter a valid number.");
  }

// Run the code so that the following is logged to the console: 25°C is equal to 77°F

/********************** Exercise 6 - Assigning Values  **********************/

// Prompt the user for two numbers.
let userNumberInput = prompt("Enter a number");
let userNumberInput2 = prompt("Enter another number");

// Make sure that the values of the variables (the strings) are converted to numbers.

let userNumberTotal = userNumberInput + userNumberInput2;
console.log("The sum of the two numbers is " + userNumberTotal);

// Create a new variable, add the numbers, and log the value.

userNumberTotal = userNumberInput + userNumberInput2 + 100;
console.log(userNumberTotal);

or

// Check if the inputs are valid numbers
//if (!isNaN(input1) && !isNaN(input2)) {
  // Create a new variable and add the numbers
//let result = input1 + input2;
//console.log(`Addition result: ${result}`);

  // Reassign the variable to store the values of the numbers being subtracted
result = input1 - input2;
console.log(`Subtraction result: ${result}`);

  // Add 100 to the variable
result += 100;
console.log(`After adding 100: ${result}`);

  // Divide the value of the variable by 20
result /= 20;
console.log(`After dividing by 20: ${result}`);

/********************** Exercise 7 - Math Object  **********************/
let decimalNumber = 7.8;
// Given the above variable, how would you round the value to the nearest whole number (using the Math object)?
let roundedNumber = Math.round(decimalNumber);
console.log(roundedNumber);

// Console log the output to check your work.

/********************** Exercise 8 - Math Object  **********************/ // Done
// Dice Game
// Create a variable that stores the value of a random number between 1 and 6

// Alert the user of the random number.
let diceNumber = Math.floor(Math.random() * 6 + 1);

alert("random dice roll is: " + diceNumber);

/********************** Exercise 9 - NaN  **********************/ //-- Done
let result1 = 0 / 0;
console.log(result1);
let result2 = "hello" * 5;
let result2 = "hello" * 5;
let result3 = parseInt("abc");
console.log(result3);

// Log the above variables in the console. What is the output?
NaN;
// Without changing the below code, how could you write some new code between the variable declarations and the log, so that the answer is logged to the console? Use JavaScript number tools, please—don't reassign a number directly, as in: `wordVersion = 4`.

let numVersion = 4;
let wordVersion = "four";

let value = numVersion / wordVersion;

//value printed out as NaN

console.log("Four divided by four is: " + numVersion / wordVersion);

// Look up the isNaN() operator in MDN. What does it do? How would you use it?
let testVariable = 37;
isNaN(testVariable);

//The output displayed is "false"

let testVariable2 = "hello";
isNaN(testVariable2);

//The NaN global property is a value representing Not-A-Number. Answer is in link line below:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
