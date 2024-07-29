let myArr = [9,0,8,1,7,2,3,6,5,4];

// custom push() method
function pusher(arr, item){
    finalPosition = arr.length;
    arr[finalPosition] = item;
    return arr;
}

// custom shift() method
function inValCut(arr){
    let index = 0
    const firstVal= arr[index];
    while(index<arr.length){
    arr[index] = arr[index+1];
    index++;
    }
    arr.length = arr.length-1;
        return firstVal;
}

// Spread Operator
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

function mergeSort(arr){
    
    if(arr.length<2){
        return arr;
    }
    const mid = Math.floor(arr.length/2);

    const leftArr = [];
    for(let i = 0; i<mid; i++){
        leftArr[i] = arr[i]
    }
    
    const rightArr = [];
    let j = 0; // need new index because [i] will continue old index
    for(let i=mid; i<arr.length; i++){
        rightArr[j] = arr[i];
        j++;
    }


    merge(mergeSort(leftArr), mergeSort(rightArr)); // recursive part
    
    
    function merge(arr, leftArr, rightArr){
        let sortedArr = [];
        while(leftArr.length && right.length){
            if(leftArr[0] <= rightArr[0]){
                pusher(sortedArr, inValCut(leftArr));              
            }else{
                pusher(sortedArr, inValCut(rightArr));
            }
        }
        SpreadOperator(sortedArr, leftArr, rightArr);
    }
}

mergeSort(myArr);



