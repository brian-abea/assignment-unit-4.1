console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
  let greetings = helloName("Jordan");
  console.log(greetings);


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
let total = addNumbers(5, 9);
console.log(total);


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
 return firstNumber * secondNumber * thirdNumber;
}

let result = multiplyThree(10, 8, 15);
console.log(result);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } 
  else {
    return false;
  }
}
let positiveResult = isPositive(10);
console.log(positiveResult);

negativeResult = isPositive(-2);
console.log(negativeResult);

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
function isPositive(number){
  if (number > 0){
    return true;
  }
  else if (number === 0){
    return false;
  }
  else {
    return false;q2qA2
  }
}
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length === 0){
    return undefined;
  }
  return array[array.length - 1];
}
let arrayResult =getLast([2, 6, 8, 10, 2, 9]);
console.log(arrayResult);

arrayResult = getLast([]);
console.log(arrayResult);
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(let i =0; i < array.length; i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}
let valueResult = find(5,[4, 5, 9, 15, 3, 10]);
console.log(valueResult);

valueResult = find(1, [4, 5, 9, 15, 3, 10]);
console.log(valueResult);

// using Array.includes

function find(value, array){
  return array.includes(value);
}
let includeResult = find(2, [1, 2, 3, 4, 5, 6]);
console.log(includeResult);

includeResult = find(0, [1, 2, 3, 4, 5, 6]);
console.log(includeResult);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string[0] === letter;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( numbers) {
  let sum = 0
    // TODO: loop to add items
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
console.log(sumAll([1, 3, 9, 8, 10]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArray(numbers){
  return numbers.filter(number => number > 0);
}
let numbers = [-9, -6, 0, 1, 8, 3, -7, 10, -22];
let arrayNumbers = positiveArray(numbers);
console.log(arrayNumbers);
console.log(numbers);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
