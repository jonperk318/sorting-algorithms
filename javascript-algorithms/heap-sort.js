/*
HEAP SORT: comparison-based algorithm similar to selection sort, but it uses
binary heaps, which are binary trees where the value of the children of the node
are greater than or equal to the value of the node
Time complexity:
    best case: O(n*log(n))
    average case: O(n*log(n))
    worst case: O(n*log(n))
Space complexity: O(1)
Not stable
 */

function heapify(arr, n, root) // n is size of the array
{                       // helper function to create data heap from binary tree
    let largest = root; // largest element is the root
    const left = 2 * root + 1;
    const right = 2 * root + 2;

    if (left < n && arr[left] > arr[largest]) // if left child exists and is > root
        largest = left;

    if (right < n && arr[right] > arr[largest]) // if right child exists and is > root
        largest = right;

    if (largest !== root) { // swap largest with root if needed
        [arr[root], arr[largest]] = [arr[largest], arr[root]];
        heapify(arr, n, largest); // recursive call
    }
}

function heapSort(arr) // main function
{
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)  // build max heap
        heapify(arr, n, i);

    for (i = n - 1; i > 0; i--) { // extract elements one by one
        [arr[i], arr[0]] = [arr[0], arr[i]];
        heapify(arr, i, 0);
    }

    return arr;
}

module.exports = heapSort;