/*
COUNTING SORT: non-comparison based algorithm optimal for arrays with input values of
a small range compared with the total number of elements to be sorted
Time complexity:
    best case: O(n + m)
    average case: O(n + m)
    worst case: O(n + m)
Space complexity: O(n + m)
Stable
 */

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CountingSort {

    static void sort(ArrayList<Integer> arr) {

        int n = arr.size();
        int m = 0;

        for (Integer i : arr) { // finding max of arr
            m = Math.max(m, i);
        }

        List<Integer> countArr = new ArrayList<Integer>(Collections.nCopies(m + 1, 0));

        for (int j = 0; j < n; j++) { // store count of occurrences in countArr
            countArr.set(arr.get(j), countArr.get(arr.get(j)) + 1);
        }

        for (int k = 1; k <= m; k++) { // countArr[k] now contains actual position of this digit in output array
            countArr.set(k, countArr.get(k) + countArr.get(k - 1));
        }

        ArrayList<Integer> outputArr = new ArrayList<>(Collections.nCopies(n, 0));

        for (int i = n - 1; i >= 0; i--) { // build output array
            outputArr.set(countArr.get(arr.get(i)) - 1, arr.get(i));
            countArr.set(arr.get(i), countArr.get(arr.get(i)) - 1); // one less element to place
        }

        for (int j = 0; j < n; j++) // convert arr into output
            arr.set(j, outputArr.get(j));

    }

}
