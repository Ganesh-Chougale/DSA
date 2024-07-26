let myArr = [9,0,8,1,7,2,3,6,5,4];   

function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));

    function merge(leftArr, rightArr){
        const sortedArr = [];
        while(leftArr.length && rightArr.length){
            if(leftArr[0] <= rightArr[0]){
                sortedArr.push(leftArr.shift());
            }else{
                sortedArr.push(rightArr.shift());
            }
        }
        return [...sortedArr, ...leftArr, ...rightArr]
    }
}
console.log(mergeSort(myArr));