/**
 * Map sort method name to fixed color
 *
 * @param sortName sort name
 * @returns {string} color
 */
function getColor(sortName) {
    var colors = {
        insertionSort: "#EFCA00",
        mergeSort: "#FE433C",
        quickSort: "#F31D64",
        selectionSort: "#A224AD",
        heapSort: "#6A38B3",
        countingSort: "#3C5081",
        radixSort: "#0095EF",
        bubbleSort: "#43C68B",

        python: "#3572a5",
        java: "#b07219",
        cpp: "#f34b7d",
        javaScript: "#f1e05a",

        other: "#BCBCBC"
    };

    var color = colors[sortName];

    return color ? color : colors["other"];
}

module.exports.getColor = getColor;