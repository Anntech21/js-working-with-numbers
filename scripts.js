/********************** Exercise 1  **********************/
// Describe the following code:

let wholesalePrice = 5.45;
let retailPrice = 9.99;
let quantity = 47;
let salesTotal = retailPrice * quantity;
let profit = salesTotal - (wholesalePrice * quantity);

// Where might this code be used?
This code migth be used to build a POS system for retail companies, frontend backend interface.

// Run this code and log the profit variable in the console. What answer do you get?
213.38

// How would you change this code to make the value of the quanitity variable dynamic?


/********************** Exercise 2 - Operators **********************/
// Step 1: Calculate the sum of two numbers and log the result.
let num1 = 5;
let num2 = 4;
let num3 = num1 + num2;
num3 
9
console.log("num3");
9

// Step 2: Calculate the difference between two numbers and print the result.
let num4 = num1 % num2;
num4
1
console.log(num4);


// Step 3: Calculate the product of two numbers and print the result.
let num5 = num1 * num2;
num5
20
console.log(num5);

// Step 4: Calculate the result of dividing two numbers and print the result. Handle division by zero. 

//(I GOT CARRIED AWAY INTO PERCENTAGE)
let englishScore = 60;
let scienceScore = 76;
let twoScore = englishScore + scienceScore;
console.log(twoScore);
let twoSubjectScore = 200;
console.log(twoSubjectScore);

let twoSubjectTotalScore = twoScore * 100 / twoSubjectScore;
let twoSubjectPercentage = twoSubjectTotalScore + '%';
console.log(twoSubjectPercentage);
68%


// Step 5: Check if a given number is even and print the result.
let checkScore = twoSubjectPercentage
if (twoSubjectPercentage % 2 === 0) {console.log ("Its Even")};
else {console.log ("Its Odd")};

 



/********************** Exercise 3 - Decades Calculator **********************/
// Store your current age into a variable.
// Store a maximum age into a variable (10 years older than you are now).
// Store an estimated number of meals you should eat per day (as a number).
// Calculate how many you would eat total for the next decade.
// Output the result to the screen like so: "You will need [AMOUNT] meals to last you until the age of [AGE]".





/********************** Exercise 4 - PEMDAS **********************/
// You are working on an education app and you want to be able to provide the average scores for students.
// Here are the stored variables for a student and their subjects.

let mathScore = 90;
let scienceScore = 85;
let englishScore = 80;
let historyScore = 95;

// How would you get the average of their scores using JavaScript?






/********************** Exercise 5 - Weather Converter **********************/
// Write a calculation that converts celsius to fahrenheit. To get the value of fahrenheit, you have to multiply the celsius value by 9/5 and then add 32. 


// Prompt the user for the value of the temperature in celcius. 


// Run the code so that the following is logged to the console: 25°C is equal to 77°F



/********************** Exercise 6 - Assigning Values  **********************/

// Prompt the user for two numbers.

// Make sure that the values of the variables (the strings) are converted to numbers. 

// Create a new variable, add the numbers, and log the value.

// Reassign the variable to store the values of the numbers being substracted. Log the value.

// Add 100 to the variable. Log the value.

// Divide the value of the variable by 20. Log the value.






/********************** Exercise 7 - Math Object  **********************/
let decimalNumber = 7.8;
// Given the above variable, how would you round the value to the nearest whole number (using the Math object)?

// Console log the output to check your work.





/********************** Exercise 8 - Math Object  **********************/ // Done
// Dice Game
// Create a variable that stores the value of a random number between 1 and 6
let diceNumber = 6;

// Alert the user of the random number.

alert("random dice roll is: " + diceNumber;




/********************** Exercise 9 - NaN  **********************/ //-- Done
let result1 = 0 / 0;
let result2 = "hello" * 5;
let result3 = parseInt("abc");

// Log the above variables in the console. What is the output?
NaN
// Without changing the below code, how could you write some new code between the variable declarations and the log, so that the answer is logged to the console? Use JavaScript number tools, please—don't reassign a number directly, as in: `wordVersion = 4`.

let numVersion = 4;
let wordVersion = 'four';
let value = numVersion / wordVersion;

value printed out as NaN


console.log("Four divided by four is: " + (numVersion / wordVersion))

// Look up the isNaN() operator in MDN. What does it do? How would you use it?

The NaN global property is a value representing Not-A-Number.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
