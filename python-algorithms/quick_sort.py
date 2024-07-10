"""
QUICK SORT: divide and conquer algorithm that recursively sorts elements into 
two arrays by selecting a pivot (here, the last index of the subarray) and partitioning 
the array around that pivot, sorting elements smaller than the pivot to one subarray and 
larger elements to the other subarray until reaching the base case of an empty array
Time complexity:
    best case: O(n*log(n))
    average case: O(n*log(n))
    worst case: O(n^2) (chosen partition is always an extrema of the subarray)
Space complexity: O(1)
Most often not stable
Better for arrays than linked lists
"""

def partition(arr, first, last): # helper function to choose the pivot

    pivot = arr[last] # last element is selected as the pivot
    i = first - 1

    for j in range(first, last):

        if arr[j] <= pivot: # check if each element is smaller than pivot
            i += 1 # if so, increment index of smaller element
            arr[i], arr[j] = arr[j], arr[i] # swap elements

    arr[i + 1], arr[last] = arr[last], arr[i + 1]

    return i + 1 # return index of pivot


def quick_sort(arr, first, last): # main function

    if first >= last: # base case is an empty array
        return
    
    pivot = partition(arr, first, last) # find index of pivot and sort on either side
    quick_sort(arr, first, pivot - 1) # recursive calls for each side of the pivot
    quick_sort(arr, pivot + 1, last)

    return arr