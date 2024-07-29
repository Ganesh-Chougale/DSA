const fruits = ["Banana", "Orange", "Apple", "Mango"];

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
console.log(inValCut(fruits));