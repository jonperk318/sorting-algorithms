const insertionSort = require("./insertion-sort.js");
const mergeSort = require("./merge-sort.js");
const quickSort = require("./quick-sort.js");
const selectionSort = require("./selection-sort.js");
const heapSort = require("./heap-sort");
const countingSort = require("./counting-sort.js");
const radixSort = require("./radix-sort.js");
const bubbleSort = require("./bubble-sort.js");

let testArr = [3, 6, 7, 2, 4, 90, 43, 103, 2, 30234, 56, 5, 3, 2, 76, 43, 34, 102, 9]

console.log("\nUnsorted test array:\t", ...testArr);
let testArrInsertionSort = testArr.slice();
console.log("Insertion sort test:\t", ...insertionSort(testArrInsertionSort));
let testArrMergeSort = testArr.slice();
console.log("Merge sort test:\t", ...mergeSort(testArrMergeSort));
let testArrQuickSort = testArr.slice();
console.log("Quick sort test:\t", ...quickSort(testArrQuickSort, 0, testArrQuickSort.length - 1));
let testArrSelectionSort = testArr.slice();
console.log("Selection sort test:\t", ...selectionSort(testArrSelectionSort));
let testArrHeapSort = testArr.slice();
console.log("Heap sort test:\t\t", ...heapSort(testArrHeapSort));
let testArrCountingSort = testArr.slice();
console.log("Counting sort test:\t", ...countingSort(testArrCountingSort));
let testArrRadixSort = testArr.slice();
console.log("Radix sort test:\t", ...radixSort(testArrRadixSort));
let testArrBubbleSort = testArr.slice();
console.log("Bubble sort test:\t", ...bubbleSort(testArrBubbleSort));