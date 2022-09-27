//Anonymous Function
arr=[12,3,4,5,6,8,9];
var prime=function(num) {
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(arr.filter(prime)); 

  //IIFE Function
  (function(num) {
    var count=0;
    var list=[]
  for(let i=0;i<=num.length;i++){
    count=0
    for (let start = 2; num[i]>=start; start++) {
      if (num[i]% start == 0) {
        count+=1;
      }
    }
     if(count==1)
  list=list.concat(num[i]);
 
  }
  console.log(list);
}
  
    
  )(arr);