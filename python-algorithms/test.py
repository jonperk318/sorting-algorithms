from insertion_sort import insertion_sort
from merge_sort import merge_sort
from quick_sort import quick_sort
from selection_sort import selection_sort
from heap_sort import heap_sort

test_arr = [3,6,7,2,4,90,43,103,2,30234,56,5,3,2,76,43,34,102,9]

# Test sorting functions
print("\nUnsorted test array:\t" + str(test_arr))
print("Insertion sort test:\t" + str(insertion_sort(test_arr)))
print("Merge sort test:\t" + str(merge_sort(test_arr)))
print("Quick sort test:\t" + str(quick_sort(test_arr, 0, len(test_arr) - 1)))
print("Selection sort test:\t" + str(selection_sort(test_arr)))
print("Heap sort test:\t\t" + str(heap_sort(test_arr)))

print("\n")