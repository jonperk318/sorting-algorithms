const insertionSort = require("./insertion-sort.js");
const mergeSort = require("./merge-sort.js");
const quickSort = require("./quick-sort.js");
const selectionSort = require("./selection-sort.js");
const heapSort = require("./heap-sort");
const countingSort = require("./counting-sort.js");
const radixSort = require("./radix-sort.js");
const bubbleSort = require("./bubble-sort.js");
const fs = require("fs");
const now = require('nano-time');

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
    let tick = process.hrtime();
    insertionSort(s1);
    let tock = process.hrtime(tick);
    insertionTimes.push(tock[0] + tock[1]/1000000000);

    // Merge sort
    let s2 = samples[i].slice();
    tick = process.hrtime();
    mergeSort(s2);
    tock = process.hrtime(tick);
    mergeTimes.push(tock[0] + tock[1]/1000000000);

    // Quick sort
    let s3 = samples[i].slice();
    tick = process.hrtime();
    quickSort(s3, 0, s3.length - 1);
    tock = process.hrtime(tick);
    quickTimes.push(tock[0] + tock[1]/1000000000);

    // Selection sort
    let s4 = samples[i].slice();
    tick = process.hrtime();
    selectionSort(s4);
    tock = process.hrtime(tick);
    selectionTimes.push(tock[0] + tock[1]/1000000000);

    // Heap sort
    let s5 = samples[i].slice();
    tick = process.hrtime();
    heapSort(s5);
    tock = process.hrtime(tick);
    heapTimes.push(tock[0] + tock[1]/1000000000);

    // Counting sort
    let s6 = samples[i].slice();
    tick = process.hrtime();
    countingSort(s6);
    tock = process.hrtime(tick);
    countingTimes.push(tock[0] + tock[1]/1000000000);

    // Radix sort
    let s7 = samples[i].slice();
    tick = process.hrtime();
    radixSort(s7);
    tock = process.hrtime(tick);
    radixTimes.push(tock[0] + tock[1]/1000000000);

    // Bubble sort
    let s8 = samples[i].slice();
    tick = process.hrtime();
    bubbleSort(s8);
    tock = process.hrtime(tick);
    bubbleTimes.push(tock[0] + tock[1]/1000000000);

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