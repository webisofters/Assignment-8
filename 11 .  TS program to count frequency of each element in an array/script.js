var a = [1, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6];
var count = {};
for (var i = 0; i < a.length; i++) {
    count[a[i]] = (count[a[i]] || 0) + 1;
}
;
console.log(count);
