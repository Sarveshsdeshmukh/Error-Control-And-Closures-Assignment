// 1. Type Conversion.
// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

function convertToNumber(string) {
    try {
      return parseInt(string);
    } catch (error) {
      return ("Invalid number");
    }
  }
  
  console.log(convertToNumber("123"));
  console.log(convertToNumber("abc")); 
  