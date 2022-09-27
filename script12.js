arr=[12,3,4,5,6,8,9];
//Arrow Function
var prime=(num) =>{
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(arr.filter(prime)); 