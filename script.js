console.log('Hello!');

// 1. Implement a getUserName function that takes user's first name and  a callback as parameter. Use the getUserName function to use the callback function to display a personalized greeting message with full name of the user.

// function call code
const getUserName = (firstName, callback) => {
  let fullName = firstName + ' Doe';
  let personalizedGreetingMessage = `Hello, ${fullName}!`;
  callback(personalizedGreetingMessage);
};
const greetUser = (personalizedGreetingMessage) => {
  console.log(personalizedGreetingMessage);
};
getUserName('John', greetUser);
// Expected Output: Hello, John Doe!

// 2.  Define a function calculateAge that uses the user's birth year and a callback function as parameters. The calculateAge function should compute the user's age by subtracting the birth year from the current year and then invoke the callback function with the calculated age as an argument. Create a displayAge function that logs a message to the console, such as "You are [age] years old!".

// function call code
const calculateAge = (birthYear, callback) => {
  let usersAge = 2025 - birthYear;
  callback(usersAge);
};
const displayAge = (usersAge) => {
  console.log(`You are ${usersAge} years old!`);
};
calculateAge(1992, displayAge);

// 3. Define a function generateUsername that takes the user's first name and a callback function as parameters. The generateUsername function should generate a username by concatenating the first name with a fixed string ("_user") and then invoke the callback function with the generated username as an argument. Create a displayUsername function that logs a message to the console, such as "Your username is: [username]!".

const generateUsername = (firstName, callback) => {
  let userName = firstName + '_user';
  callback(userName);
};
const displayUsername = (userName) => {
  console.log(userName);
};
generateUsername('Shivam', displayUsername);

// 4. Define a function checkTemperature that takes the current temperature in Celsius and a callback function as parameters. The checkTemperature function should convert the temperature to Fahrenheit and invoke the callback function with the temperature. Create a displayTemperatureMessage function that checks whether it's "Hot," "Moderate," or "Cold" and logs the temperature message to the console. Take temperature argument as 25. Temperature more than 86 is hot. Temperature from 50 to 86 is moderate and temperature below 50 is cold.

// Output: The temperature is: Moderate
const checkTemperature = (currTemp, callback) => {
  let faren = currTemp * (9 / 5) + 32;
  callback(faren);
};
const displayTemperatureMessage = (faren) => {
  if (faren > 86) {
    console.log(`it's "Hot,"`);
  } else if (faren > 50 && faren < 86) {
    console.log(`moderate`);
  } else {
    console.log('cold');
  }
};
checkTemperature(25, displayTemperatureMessage);

// 5. Convert the following code into an ES6 code (Arrow Functions).

// function processArray(numbers, callback) {
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     result.push(callback(numbers[i]));
//   }
//   console.log(result);
// }
const processArray = (numbers, callback) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};
// Function to square a number
// function squareNumber(num) {
//   return num * num;
// }
const squareNumber = (num) => {
  return num * num;
};
// Array of numbers
const numbersArray = [1, 2, 3, 4, 5];
// Process the array and square each number
processArray(numbersArray, squareNumber);

// 6. Define a function processArray that takes an array of numbers and a callback function as parameters. The processArray function should iterate over each element in the array using a for loop, apply the callback function to each element (callback function doubles each number), and then log the resulting array to the console. Create a doubleNumber function that doubles a given number.
const processArraySum = (numbers, callback) => {
  let double = [];
  for (let num of numbers) {
    double.push(num * 2);
  }
  callback(double);
};
// Array of numbers
const numbersArray2 = [2, 4, 6, 8, 10];
const doubleNumber = (double) => {
  console.log(double);
};
// Process the array and double each number
processArraySum(numbersArray2, doubleNumber);

// Output: [4, 8, 12, 16, 20]
