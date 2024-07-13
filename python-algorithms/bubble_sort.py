"""
BUBBLE SORT: recognized by many as the simplest sorting algorithm, bubble sort repeatedly
compares adjacent elements and swaps them in their proper order. (a.k.a. "sinking sort")
Time complexity:
    best case: O(n) (already sorted)
    average case: O(n^2)
    worst case: O(n^2)
Space complexity: O(1)
Stable
"""

def bubble_sort(arr):

    n = len(arr)
    
    for i in range(n): # check every element in arr

        swapped = False
        
        for j in range(0, n - i - 1): # the last i elements are in the correct place

            if arr[j] > arr[j+1]: # compare to adjacent element
                arr[j], arr[j+1] = arr[j+1], arr[j] # swap elements
                swapped = True

        if (swapped == False):
            break

    return arr