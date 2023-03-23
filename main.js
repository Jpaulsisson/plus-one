// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

const example = [1, 2, 3];
const edge = [9]; 
const superEdge = [9, 9, 9, 9, 9, 9, 9, 9, 9];

/////// first attempt //////////
function addOne(arr) {
  let number = arr.join('');
  // console.log(number)
  let newNum = (number + 1);
  // console.log(newNum)
  let answer = Array.from(number.toString(), x => x);           ////// this felt clever for a minute.. now I'm not so sure lol
  // console.log(answer);
}
addOne(example);

////// second attempt ///////
function addOneAgain(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i] = arr[i] + 1;
      return arr;
    } else if (arr[i] === 9 && arr[i - 1]) {                ////solved
      arr[i] = 0;
    } else {
      arr[i] = 0;
      arr.unshift(1);
    }
  } return arr;
} 

console.log(addOneAgain(example));
console.log(addOneAgain(edge));
console.log(addOneAgain(superEdge));
