const insertionSort = require("./insertion-sort.js");
const mergeSort = require("./merge-sort.js");
const quickSort = require("./quick-sort.js");
const selectionSort = require("./selection-sort.js");
const heapSort = require("./heap-sort");
const countingSort = require("./counting-sort.js");
const radixSort = require("./radix-sort.js");
const bubbleSort = require("./bubble-sort.js");
const fs = require("fs");

// get sizes of sample arrays
let sampleSizesText = fs.readFileSync("../samples/sample-sizes.txt", "utf-8");
let sampleSizesStrings = sampleSizesText.split(",");
sampleSizesText.close;
let sampleSizes = sampleSizesStrings.map(Number);

// create array of arrays of input samples
let samples = [];
function getSamples(size) {
    let file = fs.readFileSync("../samples/" + String(size) + ".txt", "utf-8");
    let sampleString = file.split(",");
    file.close;
    let sample = sampleString.map(Number);
    samples.push(sample);
}
sampleSizes.forEach(getSamples);

let insertionTimes = [], mergeTimes = [], quickTimes = [], selectionTimes = [], heapTimes = [],
    countingTimes = [], radixTimes = [], bubbleTimes = [];

// RUN ALL SORTING FUNCTIONS
for (let i = 0; i < samples.length; i++) {

    // Insertion sort
    let s1 = samples[i].slice();
    let tick = Date.now();
    insertionSort(s1);
    let tock = Date.now();
    insertionTimes.push((tock - tick) / 1000);

    // Merge sort
    let s2 = samples[i].slice();
    tick = Date.now();
    mergeSort(s2);
    tock = Date.now();
    mergeTimes.push((tock - tick) / 1000);

    // Quick sort
    let s3 = samples[i].slice();
    tick = Date.now();
    quickSort(s3, 0, s3.length - 1);
    tock = Date.now();
    quickTimes.push((tock - tick) / 1000);

    // Selection sort
    let s4 = samples[i].slice();
    tick = Date.now();
    selectionSort(s4);
    tock = Date.now();
    selectionTimes.push((tock - tick) / 1000);

    // Heap sort
    let s5 = samples[i].slice();
    tick = Date.now();
    heapSort(s5);
    tock = Date.now();
    heapTimes.push((tock - tick) / 1000);

    // Counting sort
    let s6 = samples[i].slice();
    tick = Date.now();
    countingSort(s6);
    tock = Date.now();
    countingTimes.push((tock - tick) / 1000);

    // Radix sort
    let s7 = samples[i].slice();
    tick = Date.now();
    radixSort(s7);
    tock = Date.now();
    radixTimes.push((tock - tick) / 1000);

    // Bubble sort
    let s8 = samples[i].slice();
    tick = Date.now();
    bubbleSort(s8);
    tock = Date.now();
    bubbleTimes.push((tock - tick) / 1000);

    console.log("Sorted array of length " + sampleSizes[i]);

}

// writing sorting times to separate files

let sortingTimes = [insertionTimes, mergeTimes, quickTimes, selectionTimes,
    heapTimes, countingTimes, radixTimes, bubbleTimes];
let sortingNames = ["insertion-sort", "merge-sort", "quick-sort", "selection-sort",
    "heap-sort", "counting-sort", "radix-sort", "bubble-sort"];
let timeString;

for (let i = 0; i < sortingTimes.length; i++) {

    timeString = sortingTimes[i].join(",");

    fs.writeFile("./javascript-sorting-times/javascript-" + sortingNames[i] + "-times.txt", timeString,
            err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });

}