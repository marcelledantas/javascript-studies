// // var employee = {
// //     skills: { ruby: "high", java: "low", python: "none" },
// // };

// // var numbers = [4, 4, 8, 15, 16, 16, 23, 42];

// // var modNumbers = numbers.filter(function(elem, index, array) {
// //     return array.indexOf(elem) === index;
// // });

// // console.log(modNumbers);

// // var re = /apples/gi;
// // var str = "Apples are round, and apples are juicy";
// // var newstr = str.replace(re, "oranges");

// // console.log(newstr);

// let left = [4, 8, 11, 20];
// let right = [1, 3, 5, 6, 25, 30];

// function merge(left, right) {
//     var result = [];
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }

//     while (left.length) result.push(left.shift());

//     while (right.length) result.push(right.shift());

//     console.log(result);

//     return result;
// }

// merge(left, right);

var a = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

for (var i = 0, j = 3; i <= 3; i++, j--) {
    console.log(a[i][j]);
}