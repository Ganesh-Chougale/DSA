let hideNseekCountDown = (num)=>{
    if(num>100){
      console.log("Im Ready");
    }else{
      console.log(num);
      hideNseekCountDown(num+10);
    }
  }
  hideNseekCountDown(10);