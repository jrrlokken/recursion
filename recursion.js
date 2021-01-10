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
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newString = "") {
  if (newString.length === str.length) return newString;
  newString += str[str.length - 1 - idx];
  return revString(str, idx + 1, newString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') stringArray.push(obj[key]);
    if (typeof obj[key] === 'object') stringArray.push(...gatherStrings(obj[key]));
  }
  return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) return middle;
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
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
