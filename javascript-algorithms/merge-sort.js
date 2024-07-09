/*
MERGE SORT: divide and conquer algorithm that recursively halves the array
until reaching the base case of an empty array and merges them back together, sorted
Time complexity:
    best case: O(n*log(n))
    average case: O(n*log(n))
    worst case: O(n*log(n))
Space complexity: O(n)
Stable
Better for linked lists than arrays
*/

function merge(left, right) { // helper function that merges two subarrays into a single sorted array

    let result = [];
    let leftIdx = 0, rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) { // compare index by index of sorted subarrays and merge

        if (left[leftIdx] < right[rightIdx]) {
            result.push(left[leftIdx]);
            leftIdx++;

        } else {
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }

    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

function mergeSort(arr) { // main function

    if (arr.length < 2) { // base case: array with single value or empty array
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // recursive calls with both halves of the unsorted array
    const right = mergeSort(arr.slice(mid));

    return merge(left, right); // merge sorted arrays
}

module.exports = mergeSort;