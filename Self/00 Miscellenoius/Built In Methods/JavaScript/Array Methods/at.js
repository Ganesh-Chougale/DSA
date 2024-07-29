const fruits = ["Banana", "Orange", "Apple", "Mango"];

function ater(arr, index){
    for(let i = 0; i<arr.length; i++){
        if(i == index){
            return arr[i]
        }
    }
}
console.log(ater(fruits, 3))