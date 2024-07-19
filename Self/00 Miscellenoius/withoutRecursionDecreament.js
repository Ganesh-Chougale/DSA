let factorial = (num)=>{
    for(let i = num; i>=2; i--){
        num = num*(i-1);
    }
    return num;
}
console.log(factorial(5));