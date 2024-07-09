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

import java.util.ArrayList;

public class MergeSort {

    void merge(ArrayList<Integer> arr, int first, int mid, int last) {
        // helper function that merges two subarrays into a single sorted array
        int leftLen = mid - first + 1;
        int rightLen = last - mid;

        // create temp arrays
        ArrayList<Integer> leftArr = new ArrayList<>();
        ArrayList<Integer> rightArr = new ArrayList<>();

        // copy data to temp arrays
        for (int i = 0; i < leftLen; i++)
            leftArr.add(i, arr.get(first + i)); // first subarray is arr[first] to arr[mid]
        for (int j = 0; j < rightLen; j++)
            rightArr.add(j, arr.get(mid + 1 + j)); // second subarray is arr[mid+1] to arr[last]

        int leftIdx = 0, rightIdx = 0;
        int mergedArrIdx = first;

        while (leftIdx < leftLen && rightIdx < rightLen) { // merge temp arrays into single array
            if (leftArr.get(leftIdx) <= rightArr.get(rightIdx)) {
                arr.set(mergedArrIdx, leftArr.get(leftIdx));
                leftIdx++;
            }
            else {
                arr.set(mergedArrIdx, rightArr.get(rightIdx));
                rightIdx++;
            }
            mergedArrIdx++;
        }

        // copy the remaining elements of left subarray, if there are any
        while (leftIdx < leftLen) {
            arr.set(mergedArrIdx, leftArr.get(leftIdx));
            leftIdx++;
            mergedArrIdx++;
        }

        // copy the remaining elements of right subarray, if there are any
        while (rightIdx < rightLen) {
            arr.set(mergedArrIdx, rightArr.get(rightIdx));
            rightIdx++;
            mergedArrIdx++;
        }
    }

    void sort (ArrayList<Integer> arr, int first, int last){

        if (first >= last) { // base case is an empty array
            return;
            }
    
        int mid = first + (last - first) / 2;
        sort(arr, first, mid); // first half of array
        sort(arr, mid + 1, last); // second half of array
        merge(arr, first, mid, last);
    }
}