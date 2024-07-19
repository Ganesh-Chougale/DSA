let myArr = [9, 0, 1, 8, 2, 7, 3, 6, 5, 4];

function mergeSort(arr){
    // si = starting index, ei = ending index
    let si = 0;
    let ei = arr.length-1;
    let mid = Math.floor((si+ei)/2);

    let leftArr = [];
    let rightArr = [];

    for(let li=si; li<=mid; li++){
        leftArr.push(arr[li]);
    }

    for(let ri=mid+1; ri<=ei; ri++){
        rightArr.push(arr[ri]);
    }
    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);

    return finalArray;

}

function merge(leftArr, rightArr){
    let finalArray = [];
    let i=0;
    let j=0;

    while(i<leftArr.length && j<rightArr.length){
        if(leftArr[i] <= rightArr[j]){
            finalArray.push(leftArr[i]);
            i++;
        }else{
            finalArray.push(rightArr[j])
            j++;
        }

    }

    for(let k=i; i<leftArr.length; k++){
        finalArray.push(leftArr[k]);
        
    }
    
    for(let k=j; j<rightArr.length; j++){
        finalArray.push(rightArr[k]);
    }
    return finalArray;
}

console.log(mergeSort(myArr));