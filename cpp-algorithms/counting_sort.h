/*
COUNTING SORT: non-comparison based algorithm optimal for arrays with input values of
a small range compared with the total number of elements to be sorted
Time complexity:
    best case: O(n + m)
    average case: O(n + m)
    worst case: O(n + m)
Space complexity: O(n + m)
Stable
*/

#ifndef COUNTING_SORT_H
#define COUNTING_SORT_H
#include <vector>
using namespace std;

void counting_sort(vector<int>& arr)
{
    auto const n = arr.size();
    int m = 0;

    for (int i = 0; i < n; i++) // finding max of arr
        m = max(m, arr[i]);

    vector<int> countArr(m + 1, 0);

    for (int j = 0; j < n; j++)  // store count of occurrences in countArr
        countArr[arr[j]]++;

    for (int k = 1; k <= m; k++) // countArr[k] now contains actual position of this digit in output array
        countArr[k] += countArr[k - 1];

    vector<int> outputArr(n);

    for (int i = n - 1; i >= 0; i--)
    {  // build output array
        outputArr[countArr[arr[i]] - 1] = arr[i];
        countArr[arr[i]]--; // one less element to place
    }

    for (int j = 0; j < n; j++) // convert arr into output
        arr[j] = outputArr[j];

    //return outputArr; optional (make function return vector<int>)
}

#endif //COUNTING_SORT_H
