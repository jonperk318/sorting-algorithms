/*
INSERTION SORT: each element is checked and put in its proper place in the sorted array
Time complexity:
    best case: O(n) (already sorted)
    average case: O(n^2)
    worst case: O(n^2)
Space complexity: O(1)
Stable
*/

import java.util.ArrayList;

public class InsertionSort {

    void sort(ArrayList<Integer> arr) {

        int length = arr.size();

        for (int i = 1; i < length; ++i) { // skip the 0th index

            int key = arr.get(i);
            int j = i - 1; // insert arr[i] into the sorted sequence arr[1] to arr[j-1]

            while (j >= 0 && arr.get(j) > key) {
                arr.set(j + 1, arr.get(j));
                j--; // decrement j until it finds a smaller number or it's the first index of the array
            }

            arr.set(j + 1, key);

        }

    }

}
