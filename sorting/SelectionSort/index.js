const sortArr = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};
console.log(sortArr([2, 6, 4, 3, 8, 9]));


//2 compare with 6 not less than 2, then 2 compare with 4 not lessrhant 2, then 2 compare with 3 not lessthan 8,...upto 9    
//6 compare with 4 but it is less than 6 so 4 will be minIndex  
