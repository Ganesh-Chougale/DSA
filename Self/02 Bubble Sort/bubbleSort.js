let myArr = [98,12,87,23,76,34,65,56];
// compares one element only with next element to it (Adjecent)


let bubbleSort = (arr) => {
    let swapped;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };
  

console.log(bubbleSort(myArr));