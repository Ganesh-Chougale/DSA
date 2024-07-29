const fruits = ["Banana", "Orange", "Apple", "Mango"];

function removeByIndex(arr, index){
  const size = arr.length;
  for(let i = index; i<size; i++){
      arr[i] = arr[i+1];
  }
      arr.length = arr.length-1;
  return arr;
}
console.log(removeByIndex(fruits, 1));