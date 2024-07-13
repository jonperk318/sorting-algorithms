"""
This script tests all 8 sorting algorithms using the randomly generated input files
and stores their run times in a text file to be plotted elsewhere
"""

# importing all sorting functions from "all.py"
from all import *

import os
import time

current_dir = os.path.dirname(__file__) # ensure script reads files from correct directory
sample_sizes = [10, 50, 100, 500, 1000, 5000, 10000, 50000]
samples = []

for s in sample_sizes: # Create a list of lists of input samples

    file_path = os.path.join(current_dir, "../inputs/" + str(s) + ".txt")
    with open(file_path, "r") as file:
        input = file.read()

    input = input.split(",")

    if input[-1] == "": # if last value in array is empty, remove it
        input.pop()
    input = [eval(i) for i in input] # get int from string

    samples.append(input)

(insertion_times, selection_times, merge_times, quick_times,
 heap_times, counting_times, radix_times, bubble_times) = [], [], [], [], [], [], [], []

for s in samples:

    # Insertion sort
    tick = time.perf_counter()
    insertion_sort(s)
    tock = time.perf_counter()
    insertion_times.append(tock - tick)

    # Selection sort
    tick = time.perf_counter()
    selection_sort(s)
    tock = time.perf_counter()
    selection_times.append(tock - tick)

    # Merge sort
    tick = time.perf_counter()
    merge_sort(s)
    tock = time.perf_counter()
    merge_times.append(tock - tick)

    # Quick sort
    tick = time.perf_counter()
    quick_sort(s)
    tock = time.perf_counter()
    quick_times.append(tock - tick)

    # Heap sort
    tick = time.perf_counter()
    heap_sort(s)
    tock = time.perf_counter()
    heap_times.append(tock - tick)

    # Counting sort
    tick = time.perf_counter()
    counting_sort(s)
    tock = time.perf_counter()
    counting_times.append(tock - tick)

    # Radix sort
    tick = time.perf_counter()
    radix_sort(s)
    tock = time.perf_counter()
    radix_times.append(tock - tick)

    # Bubble sort
    tick = time.perf_counter()
    bubble_sort(s)
    tock = time.perf_counter()
    bubble_times.append(tock - tick)

    print("Finishing sorting array of length " + str(s))