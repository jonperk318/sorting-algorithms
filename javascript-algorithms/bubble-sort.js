/*
BUBBLE SORT: recognized by many as the simplest sorting algorithm, bubble sort repeatedly
compares adjacent elements and swaps them in their proper order. (a.k.a. "sinking sort")
Time complexity:
    best case: O(n) (already sorted)
    average case: O(n^2)
    worst case: O(n^2)
Space complexity: O(1)
Stable
 */

function bubbleSort(arr)
{
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) // check every element in arr
    {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) // the last i elements are in the correct place
        {
            if (arr[j] > arr[j + 1]) // compare to adjacent element
            {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap elements
                swapped = true;
            }
        }

        if (!swapped)
            break;
    }

    return arr;
}

module.exports = bubbleSort;