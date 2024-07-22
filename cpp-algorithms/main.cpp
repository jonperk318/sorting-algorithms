// #include "all.h" (already imncluded in test.cpp)
#include <fstream>
#include <iostream>
#include <vector>
#include <chrono>
using namespace std;

void test();
void print_array(const vector<int>& arr);
void print_array_doubles(const vector<double>& arr);
void insertion_sort(vector<int>& arr);
void merge_sort(vector<int>& arr, int first, int last);
void quick_sort(vector<int>& arr, int first, int last);
void selection_sort(vector<int>& arr);
void heap_sort(vector<int>& arr, int n);
void counting_sort(vector<int>& arr);
void radix_sort(vector<int>& arr);
void bubble_sort(vector<int>& arr);

int main() {

    // Uncomment to run test
    // test();

    // get sizes of sample arrays

    ifstream sample_sizes_file("../../samples/sample-sizes.txt");
    if (!sample_sizes_file.is_open()) { // there should be no error opening the file
        cerr << "Error opening the file!" << endl;
        return 1;
    }

    vector<string> sample_sizes_strings; // initialize array to read the strings of numbers into
    while (sample_sizes_file.good()) {
        string substr;
        getline(sample_sizes_file, substr, ','); // split each string by the "," delineator
        sample_sizes_strings.push_back(substr);
    }

    sample_sizes_file.close();
    vector<int> sample_sizes; // initialize array to store integers
    for (const auto & sample_sizes_string : sample_sizes_strings) {
        sample_sizes.push_back(stoi(sample_sizes_string)); // convert string to integer
    }

    // create a list of lists of input samples

    vector<vector<int>> samples;

    for (int sample_size : sample_sizes) {

        string str = ("../../samples/" + to_string(sample_size) + ".txt");
        ifstream input_file(str.c_str());

        if (!input_file.is_open()) { // there should be no error opening the file
            cerr << "Error opening the file!" << endl;
            return 1;
        }

        vector<string> result; // initialize array to read the strings of numbers into
        while (input_file.good()) {
            string substr;
            getline(input_file, substr, ','); // split each string by the "," delineator
            result.push_back(substr);
        }

        input_file.close();
        vector<int> values; // initialize array to store integers

        for(const auto & value : result) {
            values.push_back(stoi(value)); // convert string to integer
        }

        samples.push_back(values); // add unsorted array to array of inputs

    }

    vector<double> insertion_times, merge_times, quick_times, selection_times,
    heap_times, counting_times, radix_times, bubble_times;

    // RUN ALL SORTING FUNCTIONS

    for (const vector<int>& sample: samples) {

        // Insertion sort
        vector<int> s1 = sample;
        auto tick = chrono::high_resolution_clock::now();
        insertion_sort(s1);
        auto tock = chrono::high_resolution_clock::now();
        auto duration = double(duration_cast<chrono::nanoseconds>(tock - tick).count());
        insertion_times.push_back(duration / 1000000000);

        // Merge sort
        vector<int> s2 = sample;
        tick = chrono::high_resolution_clock::now();
        merge_sort(s2, 0, s2.size() - 1);
        tock = chrono::high_resolution_clock::now();
        duration = double(duration_cast<chrono::nanoseconds>(tock - tick).count());
        merge_times.push_back(duration / 1000000000);

        // Quick sort
        vector<int> s3 = sample;
        tick = chrono::high_resolution_clock::now();
        quick_sort(s3, 0, s3.size() - 1);
        tock = chrono::high_resolution_clock::now();
        duration = double(duration_cast<chrono::nanoseconds>(tock - tick).count());
        quick_times.push_back(duration / 1000000000);

        // Selection sort
        vector<int> s4 = sample;
        tick = chrono::high_resolution_clock::now();
        selection_sort(s4);
        tock = chrono::high_resolution_clock::now();
        duration = double(duration_cast<chrono::nanoseconds>(tock - tick).count());
        selection_times.push_back(duration / 1000000000);

        // Heap sort
        vector<int> s5 = sample;
        tick = chrono::high_resolution_clock::now();
        heap_sort(s5, s5.size());
        tock = chrono::high_resolution_clock::now();
        duration = double(duration_cast<chrono::nanoseconds>(tock - tick).count());
        heap_times.push_back(duration / 1000000000);

        // Counting sort
        vector<int> s6 = sample;
        tick = chrono::high_resolution_clock::now();
        counting_sort(s6);
        tock = chrono::high_resolution_clock::now();
        duration = double(duration_cast<chrono::nanoseconds>(tock - tick).count());
        counting_times.push_back(duration / 1000000000);

        // Radix sort
        vector<int> s7 = sample;
        tick = chrono::high_resolution_clock::now();
        radix_sort(s7);
        tock = chrono::high_resolution_clock::now();
        duration = double(duration_cast<chrono::nanoseconds>(tock - tick).count());
        radix_times.push_back(duration / 1000000000);

        // Bubble sort
        vector<int> s8 = sample;
        tick = chrono::high_resolution_clock::now();
        bubble_sort(s8);
        tock = chrono::high_resolution_clock::now();
        duration = double(duration_cast<chrono::nanoseconds>(tock - tick).count());
        bubble_times.push_back(duration / 1000000000);

        cout << "Sorted array of length " + sample.size();

    }

    vector<vector<double>> sorting_times {insertion_times, merge_times, quick_times,
    selection_times, heap_times, counting_times, radix_times, bubble_times};
    vector<string> sorting_names {"insertion-sort", "merge-sort", "quick-sort", "selection-sort",
                 "heap-sort", "counting-sort", "radix-sort", "bubble-sort"};

    for (int i = 0; i < sorting_times.size(); i++) {

        ofstream output_file("../cpp-sorting-times/cpp-" + sorting_names[i] + "-times.txt");

        if (output_file.is_open()) {

            for (double j : sorting_times[i]) {
                output_file << j << ",";
            }

        }
        //ostream_iterator<double> output_iterator(output_file, ",");
        //(void)copy(begin(sorting_times[i]), end(sorting_times[i]), output_iterator);

    }

    return 0;
}