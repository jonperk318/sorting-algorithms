"""
This script tests all 8 sorting algorithms using the randomly generated input files
and stores their run times in a text file to be plotted elsewhere
"""

# importing all sorting functions from "all.py"
from all import *

import os
import time

current_dir = os.path.dirname(__file__) # ensure script reads files from correct directory
ss_file_path = os.path.join(current_dir, "../samples/sample-sizes.txt")
with open(ss_file_path, "r") as file:
    sample_sizes = file.read()
sample_sizes = sample_sizes.split(",")
if sample_sizes[-1] == "": # if last value in array is empty, remove it
    sample_sizes.pop()
sample_sizes = [eval(i) for i in sample_sizes]

samples = []

for size in sample_sizes: # Create a list of lists of input samples

    r_file_path = os.path.join(current_dir, "../samples/" + str(size) + ".txt")
    with open(r_file_path, "r") as file:
        input = file.read()
    input = input.split(",")
    if input[-1] == "": # if last value in array is empty, remove it
        input.pop()
    input = [eval(i) for i in input] # get int from string

    samples.append(input)

(insertion_times, selection_times, merge_times, quick_times,
 heap_times, counting_times, radix_times, bubble_times) = [], [], [], [], [], [], [], []

count = 0

for sample in samples: # run all sorting functions

    # Insertion sort
    s1 = list(sample)
    tick = time.perf_counter()
    insertion_sort(s1)
    tock = time.perf_counter()
    insertion_times.append(tock - tick)

    # Merge sort
    s3 = list(sample)
    tick = time.perf_counter()
    merge_sort(s3)
    tock = time.perf_counter()
    merge_times.append(tock - tick)

    # Quick sort
    s4 = list(sample)
    tick = time.perf_counter()
    quick_sort(s4, 0, len(s4) - 1)
    tock = time.perf_counter()
    quick_times.append(tock - tick)

    # Selection sort
    s2 = list(sample)
    tick = time.perf_counter()
    selection_sort(s2)
    tock = time.perf_counter()
    selection_times.append(tock - tick)

    # Heap sort
    s5 = list(sample)
    tick = time.perf_counter()
    heap_sort(s5)
    tock = time.perf_counter()
    heap_times.append(tock - tick)

    # Counting sort
    s6 = list(sample)
    tick = time.perf_counter()
    counting_sort(s6)
    tock = time.perf_counter()
    counting_times.append(tock - tick)

    # Radix sort
    s7 = list(sample)
    tick = time.perf_counter()
    radix_sort(s7)
    tock = time.perf_counter()
    radix_times.append(tock - tick)

    # Bubble sort
    s8 = list(sample)
    tick = time.perf_counter()
    bubble_sort(s8)
    tock = time.perf_counter()
    bubble_times.append(tock - tick)

    print("Sorted array of length " + str(sample_sizes[count]))
    count += 1


# write sorting times to separate files

sorting_times = [insertion_times, merge_times, quick_times, selection_times,
                 heap_times, counting_times, radix_times, bubble_times]
sorting_names = ["insertion-sort", "merge-sort", "quick-sort", "selection-sort",
                 "heap-sort", "counting-sort", "radix-sort", "bubble-sort"]

for i in range(len(sorting_times)):

    w_file_path = os.path.join(current_dir, "python-sorting-times/python-" + 
                               sorting_names[i] + "-times.txt")

    with open(w_file_path, "w") as file:

        time_string = ",".join([str(j) for j in sorting_times[i]])
        file.write(time_string)