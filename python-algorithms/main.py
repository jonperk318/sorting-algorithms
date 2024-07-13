"""
This script tests all 8 sorting algorithms using the randomly generated input files
and stores their run times in a text file to be plotted elsewhere
"""

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

    if input[-1] == "":
        input.pop()
    input = [eval(i) for i in input]

    samples.append(input)

(insertion_times, selection_times, merge_times, quick_times,
 heap_times, counting_times, radix_times, bubble_times) = [], [], [], [], [], [], [], []

print(heap_times)

