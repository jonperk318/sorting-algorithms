/*
SELECTION SORT: a simple algorithm which constantly finds the smallest value
of an array and swaps it with the first unsorted element
Time complexity:
    best case: O(n^2)
    average case: O(n^2)
    worst case: O(n^)
Space complexity: O(1)
Not stable
 */

function selectionSort(arr) {

    const n = arr.length;

    for (let i = 0; i < n - 1; i++)
    {
        let minIdx = i; // minimum unsorted element index

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) { // if minimum unsorted index is greater than current index
                minIdx = j; // minimum index becomes that index
                }
        }
        [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]; // swap values
    }
    return arr;
}

module.exports = selectionSort;