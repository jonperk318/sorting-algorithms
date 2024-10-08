"""
SELECTION SORT: a simple algorithm which constantly finds the smallest value 
of an array and swaps it with the first unsorted element
Time complexity:
    best case: O(n^2)
    average case: O(n^2)
    worst case: O(n^)
Space complexity: O(1)
Not stable
"""

def selection_sort(arr):

    n = len(arr)

    for i in range(n):

        min_idx = i # minimum unsorted element index

        for j in range(i + 1, n):

            if arr[min_idx] > arr[j]: # if minimum unsorted index is greater than current index
                min_idx = j # minimum index becomes that index

        arr[i], arr[min_idx] = arr[min_idx], arr[i] # swap values

    return arr