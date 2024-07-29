const fruits = ["Banana", "Orange", "Apple", "Mango"];

function popper(arr){
    arr.length = arr.length - 1;
    return arr;
}
console.log(popper(fruits));