"""
COUNTING SORT: non-comparison based algorithm optimal for arrays with input values of
a small range compared with the total number of elements to be sorted
Time complexity:
    best case: O(n + m)
    average case: O(n + m)
    worst case: O(n + m)
Space complexity: O(n + m)
Stable
"""

def counting_sort(arr):

    m = max(arr)
    count_arr = [0] * (m + 1)
 
    for i in arr: # store count of occurences in count_arr
        count_arr[i] += 1
 
    for j in range(1, m + 1): # count_arr[i] will now contain actual position 
                                # of this digit in output array
        count_arr[j] += count_arr[j - 1]
 
    output_arr = [0] * len(arr)
 
    for k in range(len(arr) - 1, -1, -1): # build output array
        output_arr[count_arr[arr[k]] - 1] = arr[k]
        count_arr[arr[k]] -= 1
 
    return output_arr