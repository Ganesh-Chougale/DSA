let myArr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
let uniqArry = [];

console.log("Input: ", myArr);

let unique = (arr, tempArr) => {
  for (let i = 0; i < arr.length; i++) {

    // if(arr[i] !== tempArr[i]){
    //     tempArr.push(arr[i])
    // }

  }

  return tempArr;
};

console.log("Output: ", unique(myArr, uniqArry));
