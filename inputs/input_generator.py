"""
This is a script written to generate input files of various sizes to 
read into the main scripts and test the sorting functions
"""

import random
import os

current_dir = os.path.dirname(__file__) # ensure script writes files to current directory
sample_sizes = [10, 50, 100, 500, 1000, 5000, 10000, 50000]

for s in sample_sizes:

    file_path = os.path.join(current_dir, str(s) + ".txt")

    with open(file_path, "w") as file:

        rand_list = []

        # creating list of random ints from 0 to 999
        for i in range(s):
            rand_list.append(random.randint(0, 1000)) 
        
        rand_string = ','.join([str(j) for j in rand_list]) # separating ints by commas
        file.write(str(rand_string)) # write to file
