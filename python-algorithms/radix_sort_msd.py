"""
RADIX SORT (MSD): stores elements in buckets according to the value of their n'th digit,
then recursively sorts the buckets. MSD radix sort is more efficient than LSD radix sort
because it does not necessarily check each digit of every number.
Time complexity:
    best case: O(n)
    worst case: O(n * m)
Space complexity: O(n + mb)
Not stable
"""

def get_digit(x, d): # utility function that returns the digit at index d in integer x

    return int(x // 10 ** (d - 1) % 10)


def msd_sort(arr, first, last, d): # utility function

    if last <= first: # base case
        return

    count_arr = [0] * (12)
    temp = {}

    # store occurrences of MSD (most significant digit) from each integer in count_arr[]
    for i in range(first, last + 1):
        c = get_digit(arr[i], d)
        count_arr[c + 2] += 1

    # make count_arr[] contain the actual position of these digits in temp[]
    for r in range(11):
        count_arr[r + 1] += count_arr[r]

    for i in range(first, last + 1): # build temp array
        c = get_digit(arr[i], d)
        temp[count_arr[c + 1]] = arr[i]
        count_arr[c + 1] += 1

    # copy integers of temp to arr[] so that arr[] now contains partially sorted integers
    for i in range(first, last + 1):
        arr[i] = temp.get(i - first + 1, 0)

    for r in range(10): # recursive call on each integer to sort them on each next digit
        msd_sort(arr, first + count_arr[r], first + count_arr[r + 1] - 1, d - 1)


def radix_sort_msd(arr): # main function

    m = max(arr)
    d = len(str(abs(m))) # length of largest integer
    msd_sort(arr, 0, len(arr) - 1, d)

    return arr