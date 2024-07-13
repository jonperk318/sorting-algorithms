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

#ifndef BUBBLE_SORT_H
#define BUBBLE_SORT_H

#include <vector>
using namespace std;

void bubble_sort(vector<int>& arr)
{
    auto const n = arr.size();

    for (int i = 0; i < n - 1; i++) { // check every element in arr

        bool swapped = false;

        for (int j = 0; j < n - i - 1; j++) { // the last i elements are in the correct place

            if (arr[j] > arr[j + 1]) { // compare to adjacent element
                swap(arr[j], arr[j + 1]); // swap elements
                swapped = true;
            }
        }

        if (!swapped)
            break;
    }
}

#endif //BUBBLE_SORT_H
