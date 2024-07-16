/**
 * Mapping sorting methods and programming languages to colors
 *
 * @param name language or sorting method name
 * @returns {string} color
 */
function getColor(name) {

    const colors = {

        insertionSort: "#ffb381",
        mergeSort: "#ff8a01",
        quickSort: "#ff5558",
        selectionSort: "#bd9fd1",
        heapSort: "#390f37",
        countingSort: "#3a4e9e",
        radixSort: "#01308a",
        bubbleSort: "#815288",

        python: "#3572a5",
        java: "#b07219",
        cpp: "#f34b7d",
        javaScript: "#f1e05a",

        other: "#83828b"

    };

    const color = colors[name];

    return color ? color : colors["other"];
}

module.exports.getColor = getColor;