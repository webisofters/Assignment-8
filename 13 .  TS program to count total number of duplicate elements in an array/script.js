var arry = [1, 2, 1, 3, 4, 3, 5];
var toFindDuplicates = function (arry) { return arry.filter(function (item, index) { return arry.indexOf(item) != index; }); };
var duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);
