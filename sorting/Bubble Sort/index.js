/*
step1--------
 2, 3,4,1,6,5
2, 3, 1, 4,6,5
2,3,1,4,5,6 

step2------
2,1,3,4,5,6
step3-------
1,2,3,4,5,6

*/

const bubbleSort = (nums) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};

console.log(bubbleSort([3, 2, 4, 1, 6, 5]));

//Time complexity is O(2n) -> O(n)
// Space complexity is O(1)
