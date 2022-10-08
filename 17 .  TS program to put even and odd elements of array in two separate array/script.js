var a = [5, 4, 7, 2, 3];
var b = a.filter(function (element) { return element % 2 == 0; });
var c = a.filter(function (element) { return element % 2 != 0; });
var even = b;
var Odd = c;
console.log(b);
console.log(c);
