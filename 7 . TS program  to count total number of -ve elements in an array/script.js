var a = 0;
var c = [-2, -3, -4, 5, 6, 7];
for (var i = 0; i < 6; i++) {
    if (c[i] < 0) {
        a++;
    }
    else {
        console.log("In given array there is not -ve element present");
    }
}
console.log("Total -ve numbers in array ", a);
