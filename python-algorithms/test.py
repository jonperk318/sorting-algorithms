"""
Testing all sorting functions to verify their ability to sort correcly
"""

# importing all sorting functions from "all.py"
from all import * 

test_arr = [3, 6, 7, 2, 4, 90, 43, 103, 2, 30234, 56, 5, 3, 2, 76, 43, 34, 102, 9]

# Test sorting functions
print("\nUnsorted test array:\t" + str(test_arr))
test_arr_insertion_sort = list(test_arr)
print("Insertion sort test:\t" + str(insertion_sort(test_arr_insertion_sort)))
test_arr_merge_sort = list(test_arr)
print("Merge sort test:\t" + str(merge_sort(test_arr_merge_sort)))
test_arr_quick_sort = list(test_arr)
print("Quick sort test:\t" + str(quick_sort(test_arr_quick_sort, 0, len(test_arr_quick_sort) - 1)))
test_arr_selection_sort = list(test_arr)
print("Selection sort test:\t" + str(selection_sort(test_arr_selection_sort)))
test_arr_heap_sort = list(test_arr)
print("Heap sort test:\t\t" + str(heap_sort(test_arr_heap_sort)))
test_arr_counting_sort = list(test_arr)
print("Counting sort test:\t" + str(counting_sort(test_arr_counting_sort)))
test_arr_radix_sort = list(test_arr)
print("Radix sort test:\t" + str(radix_sort(test_arr_radix_sort)))
test_arr_bubble_sort = list(test_arr)
print("Bubble sort test:\t" + str(bubble_sort(test_arr_bubble_sort)))

print("\n")