let pLangs = ["javascript", "python", "java", "c++", "ruby"];

function pusher(arr, item){
    finalPosition = arr.length;
    arr[finalPosition] = item;
    return arr;
}

console.log(pusher("swift"));