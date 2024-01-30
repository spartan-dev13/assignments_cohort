/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  clean_str=str.replace(/[^a-zA-Z0-9]/g ,'').toLowerCase()
  rev_str=clean_str.split("").reverse().join("");

  return rev_str==clean_str
}

module.exports = isPalindrome;
