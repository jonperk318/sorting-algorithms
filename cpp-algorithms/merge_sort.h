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

#ifndef MERGE_SORT_H
#define MERGE_SORT_H

#include <vector>
using namespace std;

void merge(vector<int>& arr, int const first, int const mid, int const last)
    // helper function that merges two subarrays into a single sorted array
{
    int const left_len = mid - first + 1;
    int const right_len = last - mid;

    // create temp arrays
    vector<int> left_arr(left_len), right_arr(right_len);

    // copy data to temp arrays
    for (int i = 0; i < left_len; i++)
        left_arr[i] = arr[first + i]; // first subarray is arr[first] to arr[mid]
    for (int j = 0; j < right_len; j++)
        right_arr[j] = arr[mid + 1 + j]; // second subarray is arr[mid+1] to arr[last]

    int left_idx = 0, right_idx = 0;
    int merged_arr_idx = first;

    while (left_idx < left_len && right_idx < right_len) { // merge temp arrays into single array
        if (left_arr[left_idx] <= right_arr[right_idx]) {
            arr[merged_arr_idx] = left_arr[left_idx];
            left_idx++;
        }
        else {
            arr[merged_arr_idx] = right_arr[right_idx];
            right_idx++;
        }
        merged_arr_idx++;
    }

    // copy the remaining elements of left subarray, if there are any
    while (left_idx < left_len) {
        arr[merged_arr_idx] = left_arr[left_idx];
        left_idx++;
        merged_arr_idx++;
    }

    // copy the remaining elements of right subarray, if there are any
    while (right_idx < right_len) {
        arr[merged_arr_idx] = right_arr[right_idx];
        right_idx++;
        merged_arr_idx++;
    }
}

void merge_sort(vector<int>& arr, int const first, int const last)
    // main function
{
    if (first >= last) { // base case: empty array
        return;
        }

    int const mid = first + (last - first) / 2;
    merge_sort(arr, first, mid); // first half of array
    merge_sort(arr, mid + 1, last); // second half of array
    merge(arr, first, mid, last);
}

#endif //MERGE_SORT_H
