/*
RADIX SORT: stores elements in buckets according to the value of their n'th digit,
then recursively sorts the buckets.
Time complexity:
    best case: O(a(n + b)) to O(a * n)
    average case: O(p * (n + d)) where p is the number of passes
    worst case: O(n^2)
Space complexity: O(n + k) where k is the largest element in the dth elements
Stable
*/

#ifndef RADIX_SORT_H
#define RADIX_SORT_H
#include <vector>
using namespace std;

void counting_sort_by_digits(vector<int>& arr, int const n, int const exp)
{ // auxiliary function

    vector<int> count_arr(10, 0);

    for (int i = 0; i < n; i++) // store count of occurrences in count_arr
        count_arr[(arr[i] / exp) % 10]++;

    for (int j = 1; j < 10; j++) // count_arr[k] now contains actual position of this digit in output array
        count_arr[j] += count_arr[j - 1];

    vector<int> output_arr(n, 0);

    for (int k = n - 1; k >= 0; k--) { // build output array
        output_arr[count_arr[(arr[k] / exp) % 10] - 1] = arr[k];
        count_arr[(arr[k] / exp) % 10]--;
    }

    for (int i = 0; i < n; i++) // convert arr into output
        arr[i] = output_arr[i];
}

void radix_sort(vector<int>& arr)
{ // main function
    int const n = arr.size();
    int const m = *max_element(arr.begin(), arr.end());

    for (int exp = 1; m / exp > 0; exp *= 10)
        counting_sort_by_digits(arr, n, exp);
}

#endif //RADIX_SORT_H
