cmake_minimum_required(VERSION 3.28)
project(cpp_algorithms)

set(CMAKE_CXX_STANDARD 17)

add_executable(cpp_algorithms test.cpp
        insertion_sort.h
        utils.h
        merge_sort.h
        quick_sort.h
        selection_sort.h
        heap_sort.h
        counting_sort.h
        radix_sort.h
        bubble_sort.h
        all.h
        main.cpp
)
