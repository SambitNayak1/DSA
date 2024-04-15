// Ques 5: Implement Merge Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const sortArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortArr.push(left.shift());
    } else {
      sortArr.push(right.shift());
    }
  }
  return [...sortArr, ...left, ...right];
}
console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
