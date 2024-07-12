/* 
RADIX SORT: stores elements in buckets according to the value of their n'th digit,
then recursively sorts the buckets.
Time complexity:
    best case: O(a(n + b)) to O(a * n)
    average case: O(p * (n + d)) where p is the number of passes
    worst case: O(n^2)
Space complexity: O(n + k) where k is the largest element in the dth elements
Stable
*/


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RadixSort {

    static void countingSort(ArrayList<Integer> arr, int n, int exp)
    {

        List<Integer> countArr = new ArrayList<Integer>(Collections.nCopies(10, 0));

        for (int i = 0; i < n; i++) {// store count of occurrences in countArr
            int d = (arr.get(i) / exp) % 10;
            countArr.set(d, countArr.get(d) + 1);
        }
        for (int j = 1; j < 10; j++) // countArr[i] will now contain actual position
            countArr.set(j, countArr.get(j) + countArr.get(j - 1)); // of this digit in output array

        ArrayList<Integer> outputArr = new ArrayList<>(Collections.nCopies(n, 0));

        for (int k = n - 1; k >= 0; k--) { // build output array
            //outputArr[countArr[(arr[k] / exp) % 10] - 1] = arr[k];
            int d = (arr.get(k) / exp) % 10;
            outputArr.set(countArr.get(d) - 1, arr.get(k));
            countArr.set(d, countArr.get(d) - 1);
        }

        for (int i = 0; i < n; i++) // copy outputArr to arr
            arr.set(i, outputArr.get(i));
    }

    static void sort(ArrayList<Integer> arr, int n)
    {
        int m = Collections.max(arr);
        for (int exp = 1; m / exp > 0; exp *= 10)
            countingSort(arr, n, exp);
    }

}
