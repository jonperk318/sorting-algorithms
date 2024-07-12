/*
RADIX SORT: stores elements in buckets according to the value of their n'th digit,
then recursively sorts the buckets.
Time complexity:
    best case: O(a(n + b)) to O(a * n)
    average case: O(p * (n + d)) where p is the number of passes
    worst case: O(n^2)
Space complexity: O(n + k) where k is the largest element in the dth elements
Stable
*/


function countingSortByDigit(arr, exp) { // auxiliary function

    const n = arr.length;
    let countArr = Array(10).fill(0, 0);

    for (let i = 0; i < n; i++) { // store count of occurrences in countArr
        const d = Math.floor(arr[i] / exp) % 10;
        countArr[d]++;
    }

    for (let j = 1; j < 10; j++) { // countArr[j] will now contain actual position
        countArr[j] += countArr[j - 1]; // of this digit in output array
    }

    let outputArr = Array(n);

    for (let k = n - 1; k >= 0; k--) { // build outputArr
        const digit = Math.floor(arr[k] / exp) % 10;
        outputArr[countArr[digit] - 1] = arr[k];
        countArr[digit]--;
    }

    return outputArr;

}


function radixSort(arr) { // main function

    let m = 0;

    for (let i = 0; i < arr.length; i++) { // find max of arr
        m = Math.max(m, arr[i]);
    }

    let sortedArr = [...arr];

    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
        // Get the Count sort iteration
        sortedArr = countingSortByDigit(sortedArr, exp);
    }

    return sortedArr;
}

module.exports = radixSort;