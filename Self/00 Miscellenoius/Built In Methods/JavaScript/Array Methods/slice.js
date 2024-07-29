let myArr = ["Banana", "Orange", "Lemon", "Apple", "Mango", "kiwi"];

function slicer(arr, sI, eI){
  let temp = [];
  let k = 0;
  let size  = arr.length - (eI -sI);
  for(let i = 0; i<=arr.length; i++){
    if(i >= sI && i < eI){
      temp[k] = arr[i]
      k++
    }
  }
  return temp
}

console.log(slicer(myArr, 1, 3));