function removeDuplicates(arr, n) {
    var i = 0;
    while (i < n) {
        var cur = arr[i];
        var cnt = 0;
        while (i < n && cur == arr[i]) {
            cnt++;
            i++;
        }
        if (cnt == 1) {
            console.log(cur + " ");
        }
    }
}
var arr = [1, 3, 3, 5, 5, 6, 10];
var N = 7;
removeDuplicates(arr, N);
