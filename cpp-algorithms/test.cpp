#include <iostream>
#include "utils.h"
#include "insertion_sort.h"
#include "merge_sort.h"
#include "quick_sort.h"
using namespace std;

int main() {

    vector<int> const test_arr = {3,6,7,2,4,90,43,103,2,30234,56,5,3,2,76,43,34,102,9};
    cout << endl << "Unsorted test array:\t";
    print_array(test_arr);

    // Test insertion sort
    vector<int> test_arr_insertion_sort = test_arr;
    insertion_sort(test_arr_insertion_sort);
    cout << "Insertion sort test:\t";
    print_array(test_arr_insertion_sort);

    // Test merge sort
    vector<int> test_arr_merge_sort = test_arr;
    merge_sort(test_arr_merge_sort, 0, test_arr_merge_sort.size() - 1);
    cout << "Merge sort test:\t\t";
    print_array(test_arr_merge_sort);

    // Test quick sort
    vector<int> test_arr_quick_sort = test_arr;
    quick_sort(test_arr_quick_sort, 0, test_arr_quick_sort.size() - 1);
    cout << "Quick sort test:\t\t";
    print_array(test_arr_quick_sort);

    return 0;
}
