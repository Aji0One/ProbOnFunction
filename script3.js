
arr=[5,4,6,8,2,1];

//Anonymous Function
var sum=function(array){
var res=array.reduce((ele,ini)=>(ele+ini));
    console.log(res);

};

//IIFE Function
(function (array1){
    var add =array1.reduce((ele,ini)=>(ele+ini));
    console.log(add);
})
(arr);
sum(arr);