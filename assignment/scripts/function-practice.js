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

// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName() {
  return 'Robyn';
}
 // end helloName
// Remember to call the function to test
console.log('Hello', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( num0, num1) {
  let addition= num0 + num1;
  return addition;
  // return firstNumber + secondNumber;
} //end addNumbers
console.log('We add 23 + 85 and it equals:', addNumbers(23, 85));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num2, num3, num4 ){
  let multiply= num2 * num3 * num4;
  return multiply;
}
console.log('When we multiply 13 x 23 x 35 we get:', multiplyThree(13, 23, 35) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log('isPositive - should say true', isPositive(13));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
let last= array[array.length -1];
  return last;
}
console.log('in getLast:', getLast( [10, 30, 60] ));
console.log('in getLast:', getLast( [20, 25, 30, 35]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for ( let x=0; x < find.length; x++){
    if (array[x] === value) {
      return true;
    }
    return false;
    }
}
console.log('Value is found:', find( 20, [10, 30, 60] ));
console.log('Value is found:', find( 10, [10, 30, 60] ));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if ( string [0] === letter){
    return true;
  } {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0;
  // TODO: loop to add items
//  for( x=0; x< sumAll.length; x++){
  //  sum = sum + sumAll[ x ];
  //}
  for (let sum in sumAll){
    sum += sumAll[x];
    }
  return sum;
}
  console.log('The total is: ', sumAll( [10, 45, 85, 9] ));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
