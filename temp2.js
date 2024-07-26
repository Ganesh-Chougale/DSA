let factorial = (num)=>{
  if(num<2){
    return num;
    // console.log("if : ", num);
  }
  else{
   return num * factorial(num-1);
    // console.log("else : ", num);
  }
}
console.log('start');
console.log(factorial(6));
console.log('end');