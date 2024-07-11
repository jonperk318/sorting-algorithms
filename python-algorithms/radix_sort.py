"""
RADIX SORT: stores elements in buckets according to the value of their n'th digit,
then recursively sorts the buckets.
Time complexity:
    best case: O(a(n + b)) to O(a * n)
    average case: O(p * (n + d)) where p is the number of passes
    worst case: O(n^2)
Space complexity: O(n + k) where k is the largest element in the dth elements
Stable
"""

def counting_sort_by_digits(arr, exp): # auxiliary function

    n = len(arr)
    count_arr = [0] * (10)

    for i in range(0, n): # store count of occurrences in count_arr
        index = arr[i] // exp
        count_arr[index % 10] += 1

    for i in range(1, 10):# count_arr[i] will now contain actual position 
                                # of this digit in output array
        count_arr[i] += count_arr[i - 1]

    i = n - 1
    output_arr = [0] * (n)

    while i >= 0: # build output_arr
        index = arr[i] // exp
        output_arr[count_arr[index % 10] - 1] = arr[i]
        count_arr[index % 10] -= 1
        i -= 1

    i = 0 # copy output_arr to arr
    for i in range(0, len(arr)):
        arr[i] = output_arr[i]


def radix_sort(arr): # main function

    m = max(arr)

    exp = 1 # 10 raised to the power of the current digit number
    while m / exp >= 1: # counting_sort for every digit
        counting_sort_by_digits(arr, exp)
        exp *= 10

    return arr