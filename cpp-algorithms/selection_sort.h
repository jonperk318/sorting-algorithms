/*
SELECTION SORT: a simple algorithm which constantly finds the smallest value
of an array and swaps it with the first unsorted element
Time complexity:
    best case: O(n^2)
    average case: O(n^2)
    worst case: O(n^)
Space complexity: O(1)
Not stable
 */

#ifndef SELECTION_SORT_H
#define SELECTION_SORT_H
#include <vector>
using namespace std;

void selection_sort(vector<int>& arr)
{
    auto const n = arr.size(); // minimum unsorted element index

    for (int i = 0; i < n - 1; i++) {

        int min_idx = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) // if minimum unsorted index is greater than current index
                min_idx = j; // minimum index becomes that index
        }

        swap(arr[min_idx], arr[i]); // swap values
    }
}

#endif //SELECTION_SORT_H
