const insertionSort = require("./insertion-sort.js");
const mergeSort = require("./merge-sort.js");
const quickSort = require("./quick-sort.js");

let testArr = [3, 6, 7, 2, 4, 90, 43, 103, 2, 30234, 56, 5, 3, 2, 76, 43, 34, 102, 9]

console.log("\nUnsorted test array:\t", ...testArr);
console.log("Insertion sort test:\t", ...insertionSort(testArr));
console.log("Merge sort test:\t", ...mergeSort(testArr));
console.log("Quick sort test:\t", ...quickSort(testArr, 0, testArr.length - 1));