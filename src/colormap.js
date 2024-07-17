/**
 * Map sort method name to fixed color
 *
 * @param sortName sort name
 * @returns {string} color
 */
function getColor(sortName) {
    var colors = {
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

    var color = colors[sortName];

    return color ? color : colors["other"];
}

module.exports.getColor = getColor;