var a:number = 0
var b:number = 0
var c:number [] = [2,3,4,5,6,7]
for(var i=0; i<6 ; i++){
if(c[i]%2==0){
    a++
}
else {
    b++
}
}
console.log("Total even numbers are ",a);
console.log("Total odd numbers are ",b);

