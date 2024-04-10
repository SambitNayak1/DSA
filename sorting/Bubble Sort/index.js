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
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
};

console.log(bubbleSort([3, 2, 4, 1, 6, 5]));
