/**
 * Map sorting methods and programming languages to colors
 *
 * @param name language or sorting method name
 * @returns {string} color
 */
function getColor(name) {

    var colors = {

        insertionSort: "#d7bc6a",
        mergeSort: "#c5093b",
        quickSort: "#a8204e",
        selectionSort: "96227d",
        heapSort: "#532a85",
        countingSort: "#06aafc",
        radixSort: "#026cb5",
        bubbleSort: "#282f85",

        python: "#3572a5",
        java: "#b07219",
        cpp: "#f34b7d",
        javaScript: "#f1e05a",
        other: "#2d2c41"

    };

    var color = colors[name];

    return color ? color : colors["other"];
}

module.exports = getColor;