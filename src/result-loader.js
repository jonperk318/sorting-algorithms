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



/*

const withElementsInRange = (min, max) => {
    return {
        range: {
            min: min,
            max: max
        }
    }
};

const size = (from, to, step = 1) => {
    return {
        size: {
            from: from,
            to: to,
            step: step
        }
    };
};

const add = function(sectionName, sortingMethods, arrayOpts) {
    resultsArr.push({
        name: sectionName,
        methods: sortingMethods,
        array: arrayOpts.reduce((opts, option) => {
            return {
                ...opts,
                ...option
            }
        }, {})
    })
};

// Add sorting method times for each language
add("Sorting in Python", sortingNamesCC,
    [pythonTimes, sampleSizes]);
add("Sorting in Java", sortingNamesCC, javaTimes);
add("Sorting in C++", sortingNamesCC, cppTimes);
add("Sorting in JavaScript", sortingNamesCC, javaScriptTimes);
*/

/*
// Add language times for each sorting method
add("From 100 To 1000", allSorts, [
    randomized,
    withElementsInRange(0, 10000),
    size(100, 1000, 50)
]);
add("From 100 To 1000 Duplicate Keys", allSorts, [
    randomized,
    withElementsInRange(0, 5),
    size(100, 1000, 50)
]);
add("From 100 To 1000 Sorted Array", allSorts, [
    sorted,
    size(100, 1000, 50)
]);
add("From 100 To 1000 Sorted Array Desc", allSorts, [
    descSorted,
    size(100, 1000, 50)
]);


add("From 1000 To 10000", allSorts, [
    randomized,
    withElementsInRange(0, 100000),
    size(1000, 10000, 500)
]);
add("From 1000 To 10000 Duplicate Keys", allSorts, [
    randomized,
    withElementsInRange(0, 10),
    size(1000, 10000, 500)
]);
add("From 1000 To 10000 Sorted Array", allSorts, [
    sorted,
    size(1000, 10000, 500)
]);
add("From 1000 To 10000 Sorted Array Desc", allSorts, [
    descSorted,
    size(1000, 10000, 500)
]);


add("From 10000 To 100000", fastSorts, [
    randomized,
    withElementsInRange(0, 1000000),
    size(10000, 100000, 5000)
]);
add("From 10000 To 100000 Duplicate Keys", fastSorts, [
    randomized,
    withElementsInRange(1, 20),
    size(10000, 100000, 5000)
]);
add("From 10000 To 100000 Sorted Array", fastSorts, [
    sorted,
    size(10000, 100000, 5000)
]);
add("From 10000 To 100000 Sorted Array Desc", fastSorts, [
    descSorted,
    size(10000, 100000, 5000)
]);


add("From 100000 to 1000000", fastSorts, [
    randomized,
    withElementsInRange(0, 10000000),
    size(100000, 1000000, 50000)
]);
add("From 1000000 to 10000000", fastSorts, [
    randomized,
    withElementsInRange(0, 100000000),
    size(1000000, 10000000, 1000000)
]);

*/


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

/**
 * Test suite.
 * For each generated array, test all sort methods.
 *
 * @param suiteConfig test suite config
 * @returns Promise<[{arraySize, {methodName: time}}]>
 */
/*
const testSuite = async function(suiteConfig) {

    const arrays = generateArrays(suiteConfig.array);

    return Promise.all(arrays.map((array) => new Promise((resolve, reject) => {

        let suite = new Benchmark.Suite;

        suiteConfig.methods.forEach((method) => {
            suite.add(method.name, () => {
                method(array.slice(0))
            }, {
                maxTime: 0.001
            })
        });

        suite.on('cycle', function(event) {
            console.log(String(event.target));

        }).on('complete', function() {
            resolve({
                array: array.length,
                methods: this.reduce((methods, method) => {
                    methods[method.name] = method.stats.mean;
                    return methods;
                }, {})
            });
        });

        suite.run({ 'async': true });
    })));
};

*/

/**
 * Test all suites and await for results
 *
 * @returns {Array}
 */

const generateResults = async function() {

    let results = [];

    for(let i = 0; i < resultsArr.length; i++) {

        let suiteConfig = resultsArr[i];
        console.log("Performing test: " + suiteConfig.name);
        let suiteResults = await testSuite(suiteConfig);

        results.push({
            name: suiteConfig.name,
            results: suiteResults
        });
    }

    return results;
};

const performTest = async function() {
    saveResults(await generateResults());
};

//performTest();

saveResults(resultsArr);