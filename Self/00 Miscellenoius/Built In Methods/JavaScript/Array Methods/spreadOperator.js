let num1 = [1,2,3];
let num2 = [4,5,6];
let num3 = [7,8,9];

function SpreadOperator(arr1, arr2, arr3){
  let index = 0;
  let finalArr = []
  
  for(let i = 0; i<arr1.length; i++){
    finalArr[index] = arr1[i]
    index++;
  }
    for(let i = 0; i<arr2.length; i++){
    finalArr[index] = arr2[i]
    index++
  }
  for(let i = 0; i<arr3.length; i++){
    finalArr[index] = arr3[i]
    index++;
  }
  return finalArr;
}

console.log(SpreadOperator(num1, num2, num3));