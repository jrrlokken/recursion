/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base case
  if (nums.length === 0) return 1;
  // Normal case
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, current = 0) {
  if (idx === words.length) return current;
  current = Math.max(words[idx].length, current);
  return longest(words, idx + 1, current)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newString = "") {
  if (idx >= str.length) return newString;
  newString += str[idx];
  return everyOther(str, idx + 2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (idx === str.length) return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
