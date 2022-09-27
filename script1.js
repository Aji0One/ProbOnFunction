let arr=[5,4,2,3,7,9,8];

// Anonymous Function
var odd=function(array){
    array.forEach((ele)=>{
        if(ele%2!=0)
        console.log(ele);
    });
};

//IIFE Function
( function(array1){
    array1.forEach((ele)=>{
        if(ele%2!=0)
        console.log(ele);
    });
}) (arr);


odd(arr);