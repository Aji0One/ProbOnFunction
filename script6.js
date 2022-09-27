//Anonymous Funtion
var getmedian=function (a1,a2,n)
{
    let i = n-1;
    let j= 0;
    while((a1[i]>a2[j]) && j<n && i>-1)
    {
        
        let temp=a1[i];
        a1[i]=a2[j];
        a2[j]=temp;
        i--,j++;
    }
    a1.sort(function(a ,b) {return a-b;});
    a2.sort(function(a ,b) {return a-b;});
    return (parseInt((a1[n-1]+a2[0])/2));

     
}
let ar1 = [ 1, 12, 15, 26, 38 ];
let ar2 = [ 2, 13, 17, 30, 45 ];

let n1 = ar1.length;
let n2 = ar2.length;
if (n1 == n2)
console.log("Median is "+ getmedian(ar1, ar2, n1));
else
console.log("Doesn't work for arrays of unequal size");
  
//IIFE Function    
(function (a1,a2,n)
{
    let i = n-1;
    let j=0;
    while((a1[i]>a2[j]) && j<n && i>-1)
    {
        
        let temp=a1[i];
        a1[i]=a2[j];
        a2[j]=temp;
        i--,j++;
    }
    a1.sort(function(a ,b) {return a-b;});
    a2.sort(function(a ,b) {return a-b;});
    console.log ("Madian is"+ parseInt((a1[n-1]+a2[0])/2));

     
})
(ar1,ar2,n1);


