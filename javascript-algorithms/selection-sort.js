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

        let min_idx = i; // minimum unsorted element index
        for (let j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx]) // if minimum unsorted index is greater than current index
                min_idx = j; // minimum index becomes that index

        [arr[min_idx], arr[i]] = [arr[min_idx], arr[i]]; // swap values
    }

    return arr;
}

module.exports = selectionSort;