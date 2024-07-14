#include "all.h" // importing all sorting functions
using namespace std;

void test() {

    vector<int> const test_arr {3,6,7,2,4,90,43,103,2,30234,56,5,3,2,76,43,34,102,9};
    cout << endl << "Unsorted test array:\t";
    print_array(test_arr);

    // Insertion sort test
    vector<int> test_arr_insertion_sort = test_arr;
    insertion_sort(test_arr_insertion_sort);
    cout << "Insertion sort test:\t";
    print_array(test_arr_insertion_sort);

    // Merge sort test
    vector<int> test_arr_merge_sort = test_arr;
    merge_sort(test_arr_merge_sort, 0, test_arr_merge_sort.size() - 1);
    cout << "Merge sort test:\t\t";
    print_array(test_arr_merge_sort);

    // Quick sort test
    vector<int> test_arr_quick_sort = test_arr;
    quick_sort(test_arr_quick_sort, 0, test_arr_quick_sort.size() - 1);
    cout << "Quick sort test:\t\t";
    print_array(test_arr_quick_sort);

    // Selection sort test
    vector<int> test_arr_selection_sort = test_arr;
    selection_sort(test_arr_selection_sort);
    cout << "Selection sort test:\t";
    print_array(test_arr_selection_sort);

    // Heap sort test
    vector<int> test_arr_heap_sort = test_arr;
    heap_sort(test_arr_heap_sort, test_arr_heap_sort.size());
    cout << "Heap sort test:\t\t\t";
    print_array(test_arr_heap_sort);

    // Counting sort test
    vector<int> test_arr_counting_sort = test_arr;
    counting_sort(test_arr_counting_sort);
    cout << "Counting sort test:\t\t";
    print_array(test_arr_counting_sort);

    // Radix sort test
    vector<int> test_arr_radix_sort = test_arr;
    radix_sort(test_arr_radix_sort);
    cout << "Radix sort test:\t\t";
    print_array(test_arr_radix_sort);

    // Bubble sort test
    vector<int> test_arr_bubble_sort = test_arr;
    bubble_sort(test_arr_bubble_sort);
    cout << "Bubble sort test:\t\t";
    print_array(test_arr_bubble_sort);

}
