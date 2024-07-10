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

import java.util.ArrayList;
import java.util.Collections;

public class HeapSort {
    void heapify(ArrayList<Integer> arr, int n, int root) { // n is size of the array
                            // helper function to create data heap from binary tree
        int largest = root; // largest element is the root
        int left = 2 * root + 1;
        int right = 2 * root + 2;

        if (left < n && arr.get(left) > arr.get(largest)) // if left child exists and is > root
            largest = left;

        if (right < n && arr.get(right) > arr.get(largest)) // if right child exists and is > root
            largest = right;

        if (largest != root) { // swap largest with root if needed
            Collections.swap(arr, root, largest);
            heapify(arr, n, largest); // recursive call
        }
    }
    public void sort(ArrayList<Integer> arr) // main function
    {
        int n = arr.size();

        for (int i = n / 2 - 1; i >= 0; i--) // build max heap
            heapify(arr, n, i);

        for (int i = n - 1; i > 0; i--) { // extract elements one by one
            Collections.swap(arr, i, 0);
            heapify(arr, i, 0);
        }
    }
}
