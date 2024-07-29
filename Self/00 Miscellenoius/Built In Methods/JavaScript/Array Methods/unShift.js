let myArr = [1,2,3,4,5];

function unshifter(arr, item){
    for(let i = arr.length; i > 0 ; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = item;
    return arr;
}
console.log("unshifted :", unshifter(myArr, 32));