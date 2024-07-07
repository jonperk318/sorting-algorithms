#include <iostream>
#include "insertion_sort.h"
#include "utils.h"
using namespace std;

int main() {

    vector<int> const test_arr = {3,6,7,2,4,90,43,103,2,30234,56,5,3,2,76,43,34,102,9};

    // Test insertion sort
    vector<int> test_arr_insertion_sort = test_arr;
    insertion_sort(test_arr_insertion_sort);
    cout << endl << "Insertion sort test: ";
    print_array(test_arr_insertion_sort);

    return 0;
}
