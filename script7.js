// Anonynous Funtion
let ar = [ 1, 12,1, 15, 26, 38,32,14,12,26 ];
let unique=function (value,index,self){
  return self.indexOf(value)===index;
}
var res=ar.filter(unique);
console.log(res);

(function(arr){
  var newtest=arr.filter((value,index,self)=>{
    console.log(self.indexOf(value)===index);
    
    })
})
(ar)