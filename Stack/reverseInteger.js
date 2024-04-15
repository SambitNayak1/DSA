// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

const reverse = (x) => {
  const isnegative = x < 0;
  const convertStr = x.toString().split("");
  const stack = [];
  for (let i = 0; i < convertStr.length; i++) {
    stack.push(convertStr[i]);
  }
  let finalNumber = "";
  while (stack.length) {
    let current = stack.pop();
    if (current) {
      finalNumber += current;
    }
  }
  const reverseNum = parseInt(finalNumber);
  return isnegative ? reverseNum * -1 : reverseNum;
};
console.log(reverse(-321));
