/*
COUNTING SORT: non-comparison based algorithm optimal for arrays with input values of
a small range compared with the total number of elements to be sorted
Time complexity:
    best case: O(n + m)
    average case: O(n + m)
    worst case: O(n + m)
Space complexity: O(n + m)
Stable
 */

function countingSort(arr) {

    const n = arr.length;
    let m = 0;

    for (let i = 0; i < n; i++) { // finding max of arr
        m = Math.max(m, arr[i]);
    }

    const countArr = new Array(m + 1).fill(0);

    for (let j = 0; j < n; j++) {
        countArr[arr[j]]++;  // store count of occurrences in countArr
    }

    for (let k = 1; k <= m; k++) {
        countArr[k] += countArr[k - 1]; // countArr[k] now contains actual position of this digit in output array
    }

    const outputArr = new Array(n);

    for (let i = n - 1; i >= 0; i--) { // build output array
        outputArr[countArr[arr[i]] - 1] = arr[i];
        countArr[arr[i]]--; // one less element to place
    }

    return outputArr;

}

module.exports = countingSort;