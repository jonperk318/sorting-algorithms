# This script tests sorting algorithms

# Imports
import time
import matplotlib.pyplot as plt; plt.rcParams['figure.dpi'] = 300

# Insertion Sort
def insertion_sort(arr): # each element is checked and put in its proper place in the sorted array

    for i in range(1, len(arr)): # skip the 0th index

        key = arr[i] 
        j = i - 1 # insert arr[i] into the sorted sequence arr[1] to arr[j-1]

        while (j >= 0 and arr[j] > key):

            arr[j + 1] = arr[j]
            j -= 1 # j decreases until it reaches a smaller number or it's the first index of the array

        arr[j + 1] = key

    return arr

# Merge Sort
def merge(left, right): # merges two halves (while going back up the recursive calls)
    
    result = []
    i = 0
    j = 0
    
    while i < len(left) and j < len(right): # loop to compare sorted sub arrays and merge
        
        # finds if next element of left array is smaller or equal to next element of right array
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else: # if not, the next element of the right array is added
            result.append(right[j])
            j += 1
            
    result += left[i:]
    result += right[j:]
    
    return result # returns merged array

def merge_sort(arr):
    # recursively breaks array apart until it is a single value, and merges them back together, sorted
    
    if len(arr) < 2: # base case
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid]) # recursive call with both halves of the unsorted array
    right = merge_sort(arr[mid:])
    
    return merge(left, right) # merges sorted arrays


# Reading input files
sample_sizes = [1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000]
#sample_sizes = [1000, 2500, 5000, 10000, 25000]
inputs = []

for sample_size in sample_sizes: # Create a list of lists of input samples

    file = open("" + str(sample_size) + ".txt", "r")
    input = file.read()
    file.close()
    input = input.split(",")
    if input[-1] == "":
        input.pop()
    input = [eval(i) for i in input]

    inputs.append(input)

# Simple Test
#test_arr = [2, 9, 101, 3853029342, 5738, 1, 78, 303, 304]
#print(insertion_sort(test_arr))
#print(merge_sort(test_arr))

# Testing Sorting Functions
sorted_inputs_1 = []
sorted_inputs_2 = []
insertion_times = []
merge_times = []

for input in inputs:

    tic = time.perf_counter()
    sorted_inputs_1.append(insertion_sort(input))
    toc = time.perf_counter()
    insertion_times.append(toc-tic)
    
    tic = time.perf_counter()
    sorted_inputs_2.append(merge_sort(input))
    toc = time.perf_counter()
    merge_times.append(toc-tic)

print(sorted_inputs_1[0])
print(sorted_inputs_2[0])

# Plot
fig, ax = plt.subplots(figsize=(4,2))
fig.suptitle('Sorting Functions Graph')
ax.plot(sample_sizes, insertion_times,'o', c='#8080FF', alpha=0.8, markeredgecolor='k', 
        label ='Insertion Sort Times')
ax.plot(sample_sizes, merge_times,'o', c='#A020F0', alpha=0.8, markeredgecolor='k', 
       label ='Merge Sort Times')
ax.set_xscale('log')
ax.set_yscale('log')
#ax.xaxis.set_major_locator(mticker.FixedLocator(sample_sizes))
#ax.set_xticks(sample_sizes)
ax.set_xlabel('Array Size')
ax.set_ylabel('Time (seconds)')
ax.tick_params(axis='both', which='major', labelsize=8)
ax.tick_params(axis='both', which='minor', labelsize=6)
ax.legend(loc='upper left', fontsize='xx-small')
fig.tight_layout()
#fig.savefig('Sorting_Functions_Graph')
plt.show()