let factorial = (num)=>{
    result = num;
    for(let i=1; i<num; i++){
        result = result*i
    }
    return result;
}
console.log(factorial(5));