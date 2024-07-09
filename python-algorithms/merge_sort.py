"""
MERGE SORT: divide and conquer algorithm that recursively halves the array 
until reaching the base case of an empty array and merges them back together, sorted
Time complexity:
    best case: O(n*log(n))
    average case: O(n*log(n))
    worst case: O(n*log(n))
Space complexity: O(n)
Stable
Better for linked lists than arrays
"""

def merge(left, right): # helper function that merges two subarrays into a single sorted array
    
    result = []
    left_idx, right_idx = 0, 0
    
    while left_idx < len(left) and right_idx < len(right): # compare index by index of sorted subarrays and merge
        
        if left[left_idx] <= right[right_idx]:
            result.append(left[left_idx])
            left_idx += 1

        else:
            result.append(right[right_idx])
            right_idx += 1
            
    result += left[left_idx:] # when one array is fully added, add the rest of the other array
    result += right[right_idx:]
    
    return result # single merged array


def merge_sort(arr): # main function
    
    if len(arr) < 2: # base case: array with single value or empty array
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid]) # recursive calls with both halves of the unsorted array
    right = merge_sort(arr[mid:])
    
    return merge(left, right) # merge sorted arrays