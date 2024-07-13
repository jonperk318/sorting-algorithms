/*
BUBBLE SORT: recognized by many as the simplest sorting algorithm, bubble sort repeatedly
compares adjacent elements and swaps them in their proper order. (a.k.a. "sinking sort")
Time complexity:
    best case: O(n) (already sorted)
    average case: O(n^2)
    worst case: O(n^2)
Space complexity: O(1)
Stable
 */

import java.util.ArrayList;
import java.util.Collections;

public class BubbleSort {

    public void sort(ArrayList<Integer> arr)
    {
        int n = arr.size();

        for (int i = 0; i < n - 1; i++) { // check every element in arr

            boolean swapped = false;

            for (int j = 0; j < n - i - 1; j++) { // the last i elements are in the correct place

                if (arr.get(j) > arr.get(j + 1)) { // compare to adjacent element

                    Collections.swap(arr, j , j + 1); // swap elements
                    swapped = true;
                }
            }

            if (!swapped)
                break;
        }
    }

}
