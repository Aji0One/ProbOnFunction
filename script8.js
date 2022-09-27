//Anonymous Function
var rotate = function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  };
  
  
  var array=[2,3,4,5,6];
  var k= 3;
  console.log(rotate(array,k));

  //IIFE Function

  (function(arr,numofshift){
    let tmp = 0;
    const leng = arr.length;
    numofshift = numofshift % leng;
    for (let i = 0; i < numofshift; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   console.log(arr);
  })(array,k);