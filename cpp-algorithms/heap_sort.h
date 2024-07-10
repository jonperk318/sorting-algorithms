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

#ifndef HEAP_SORT_H
#define HEAP_SORT_H
#include <vector>
using namespace std;

void heapify(vector<int>& arr, int const n, int const root) // n is size of the array
{                           //helper function to create data heap from binary tree
    int largest = root;     // largest element is the root
    int const left = 2 * root + 1;
    int const right = 2 * root + 2;

    if (left < n && arr[left] > arr[largest]) // if left child exists and is > root
        largest = left;

    if (right < n && arr[right] > arr[largest]) // if right child exists and is > root
        largest = right;

    if (largest != root) { // swap largest with root if needed
        swap(arr[root], arr[largest]);
        heapify(arr, n, largest); // recursive call
    }
}

void heap_sort(vector<int>& arr, int const n) // main function
{
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i); // build max heap

    for (int i = n - 1; i > 0; i--) { // extract elements one by one
        swap(arr[0], arr[i]); // swap elements
        heapify(arr, i, 0);
    }
}

#endif //HEAP_SORT_H
