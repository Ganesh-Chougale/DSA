function factorial(num){
    if(num<2){
        return num;
    }else{
        return num * fact(num-1);
    }
}
console.log(factorial(5));