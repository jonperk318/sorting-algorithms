/*
SELECTION SORT: a simple algorithm which constantly finds the smallest value
of an array and swaps it with the first unsorted element
Time complexity:
    best case: O(n^2)
    average case: O(n^2)
    worst case: O(n^)
Space complexity: O(1)
Not stable
 */

import java.util.ArrayList;
import java.util.Collections;

public class SelectionSort {

    void sort(ArrayList<Integer> arr) {

        int n = arr.size();

        for (int i = 0; i < n - 1; i++)
        {
            int minIdx = i; // minimum unsorted element index

            for (int j = i + 1; j < n; j++)

                if (arr.get(j) < arr.get(minIdx)) // if minimum unsorted index is greater than current index
                    minIdx = j; // minimum index becomes that index

            Collections.swap(arr, minIdx, i); // swap values

        }
    }

}
