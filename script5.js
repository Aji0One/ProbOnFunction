var arr=[121,300,424,525,600,428,9779];

//Anonymous Function
var pali=function(num) {

var list=[];
        num.forEach((ele)=> {
          var order=0;
          var val=ele;
            while(ele>0){
                var res=ele%10;
                order=order*10+res;
                ele=ele/10 | 0;

            }
            if(val==order)
            list=list.concat(val);
        
        });
    console.log(list);
    
  }
  
pali(arr);

//IIFE Function

  (function(num) {
    var list=[];
    num.forEach((ele)=> {
        var order=0;
        var val=ele;
          while(ele>0){
              var res=ele%10;
              order=order*10+res;
              ele=ele/10 | 0;

          }
          if(val==order)
          list=list.concat(val);
      
      });
  console.log(list);
  
}
    
  )(arr);