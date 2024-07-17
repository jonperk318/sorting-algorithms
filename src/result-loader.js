/*
* Converting output sorting times to arrays to load into the charts
* */

const fs = require("fs");

// get sizes of sample arrays
let sampleSizesText = fs.readFileSync("../samples/sample-sizes.txt", "utf-8");
let sampleSizesStrings = sampleSizesText.split(",");
sampleSizesText.close;
let sampleSizes = sampleSizesStrings.map(Number);

let sortingNames = ["insertion-sort", "merge-sort", "quick-sort", "selection-sort",
    "heap-sort", "counting-sort", "radix-sort", "bubble-sort"];
let sortingNamesCC = ["insertionSort", "mergeSort", "quickSort", "selectionSort", "heapSort",
    "countingSort", "radix-sort", "bubbleSort"];
pythonTimes = [];
javaTimes = [];
cppTimes = [];
javaScriptTimes = [];

for (let i = 0; i < sortingNames.length; i++) { // reading times into arrays

    // Python sorting times
    let pythonTimesString = fs.readFileSync("../python-algorithms/python-sorting-times/python-" +
        sortingNames[i] + "-times.txt", "utf-8");
    let pythonTimesStrings = pythonTimesString.split(",");
    pythonTimesString.close;
    let pythonTimesNumbers = pythonTimesStrings.map(Number);
    pythonTimes.push(pythonTimesNumbers);

    // Java sorting times
    let javaTimesString = fs.readFileSync("../java-algorithms/java-sorting-times/java-" +
        sortingNames[i] + "-times.txt", "utf-8");
    let javaTimesStrings = javaTimesString.split(",");
    javaTimesString.close;
    let javaTimesNumbers = javaTimesStrings.map(Number);
    javaTimes.push(javaTimesNumbers);

    // C++ sorting times
    let cppTimesString = fs.readFileSync("../cpp-algorithms/cpp-sorting-times/cpp-" +
        sortingNames[i] + "-times.txt", "utf-8");
    let cppTimesStrings = cppTimesString.split(",");
    cppTimesString.close;
    let cppTimesNumbers = cppTimesStrings.map(Number);
    cppTimes.push(cppTimesNumbers);

    // JavaScript sorting times
    let javaScriptTimesString = fs.readFileSync("../javascript-algorithms/javascript-sorting-times/javascript-" +
        sortingNames[i] + "-times.txt", "utf-8");
    let javaScriptTimesStrings = javaScriptTimesString.split(",");
    javaScriptTimesString.close;
    let javaScriptTimesNumbers = javaScriptTimesStrings.map(Number);
    javaScriptTimes.push(javaScriptTimesNumbers);

}

let resultsArr = []; // array to be written to results.js
let times = [pythonTimes, javaTimes, cppTimes, javaScriptTimes];
let languageNames = ["Sorting in Python", "Sorting in Java", "Sorting in C++", "Sorting in JavaScript"];
let languageNamesCC = ["python", "java", "cpp", "javaScript"];
let sortingNamesDisplay = ["Insertion Sort", "Merge Sort", "Quick Sort", "Selection Sort", "Heap Sort",
    "Counting Sort", "Radix Sort", "Bubble Sort"];


// First, add sorting function times for each language

for (let i = 0; i < languageNames.length; i++) { // 4 languages

    let results = [];

    for (let j = 0; j < sampleSizes.length; j++) { // 50 samples

        let resultsPerSampleSize = {};

        for (let k = 0; k < sortingNamesCC.length; k++) { // 8 sorting functions

            resultsPerSampleSize[sortingNamesCC[k]] = times[i][k][j];
            //resultsPerSampleSize[sortingNamesCC[k]].push(times[i][k][j]);

        }
        results.push({"array":sampleSizes[j], "methods":resultsPerSampleSize});

    }
    resultsArr.push({"name":languageNames[i],"results":results})

}

// Second, add language sorting speeds for each sorting function

for (let i = 0; i < sortingNamesDisplay.length; i++) { // 8 sorting functions

    let results = [];

    for (let j = 0; j < sampleSizes.length; j++) { // 50 samples

        let resultsPerSampleSize = {};

        for (let k = 0; k < languageNamesCC.length; k++) { // 4 languages

            resultsPerSampleSize[languageNamesCC[k]] = times[k][i][j];
            //resultsPerSampleSize[languageNamesCC[k]].push(times[k][i][j]);

        }
        results.push({"array":sampleSizes[j], "methods":resultsPerSampleSize});

    }
    resultsArr.push({"name":sortingNamesDisplay[i],"results":results})

}

let args = process.argv.slice(2);
let resultsFilePath = args[0] || "./results.js";

/**
 * Save generated results as results.js
 *
 * @param results
 */
const saveResults = function(results) {

    console.log("Saving results...");
    const source = "window.results=" + JSON.stringify(results);

    fs.writeFile(resultsFilePath, source, (err) => {
        if(err) {
            return console.log(err);
        }
        console.log("Done!");
    });
};

saveResults(resultsArr);