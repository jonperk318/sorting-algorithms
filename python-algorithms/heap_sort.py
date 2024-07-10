"""
HEAP SORT: comparison-based algorithm similar to selection sort, but it uses
binary heaps, which are binary trees where the value of the children of the node
are greater than or equal to the value of the node
Time complexity:
    best case: O(n*log(n))
    average case: O(n*log(n))
    worst case: O(n*log(n))
Space complexity: O(1)
Not stable
"""

def heapify(arr, n, root): # helper function to create data heap from binary tree
                    # n is size of the array
    largest = root  # largest element is the root
    left = 2 * root + 1
    right = 2 * root + 2

    if left < n and arr[largest] < arr[left]: # if left child exists and is > root
        largest = left

    if right < n and arr[largest] < arr[right]: # if right child exists and is > root
        largest = right

    if largest != root: # swap largest with root if needed
        arr[root], arr[largest] = arr[largest], arr[root]
        heapify(arr, n, largest) # recursive call


def heap_sort(arr): # main function

    n = len(arr)

    for i in range(n//2 - 1, -1, -1): # build max heap
        heapify(arr, n, i)

    for i in range(n-1, 0, -1): # extract elements one by one
        arr[i], arr[0] = arr[0], arr[i]  # swap elements
        heapify(arr, i, 0)

    return arr