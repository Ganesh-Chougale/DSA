let myArr = [9, 0, 1, 8, 2, 7, 3, 6, 5, 4];

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[i]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr
}

console.log(selectionSort(myArr));