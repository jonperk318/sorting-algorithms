"""
INSERTION SORT: each element is checked and put in its proper place in the sorted array
Time complexity:
    best case: O(n) (already sorted)
    average case: O(n^2)
    worst case: O(n^2)
Space complexity: O(1)
Stable
"""

def insertion_sort(arr):

    length = len(arr)

    for i in range(1, length): # skip the 0th index

        key = arr[i] 
        j = i - 1 # insert arr[i] into the sorted sequence arr[1] to arr[j-1]

        while (j >= 0 and arr[j] > key):

            arr[j + 1] = arr[j] 
            j -= 1 # decrement j until it finds a smaller number or it's the first index of the array

        arr[j + 1] = key

    return arr