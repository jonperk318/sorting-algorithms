/*
QUICK SORT: divide and conquer algorithm that recursively sorts elements into
two arrays by selecting a pivot (here, the last index of the subarray) and partitioning
the array around that pivot, sorting elements smaller than the pivot to one subarray and
larger elements to the other subarray until reaching the base case of an empty array
Time complexity:
    best case: O(n*log(n))
    average case: O(n*log(n))
    worst case: O(n^2) (chosen partition is always an extrema of the subarray)
Space complexity: O(1)
Stable
Better for arrays than linked lists
*/

import java.util.ArrayList;
import java.util.Collections;

public class QuickSort {

    int partition(ArrayList<Integer> arr, int first, int last) {
    // helper function to choose the pivot

      int pivot = arr.get(last); // last element is selected as the pivot
      int i = (first - 1);
  
      for(int j = first; j <= last - 1; j++) {

          if(arr.get(j) < pivot) { // check if each element is smaller than the pivot
              i++; //if so, increment index of smaller element
              Collections.swap(arr, i, j); // swap elements
          }
      }
      Collections.swap(arr, i + 1, last); // swap pivot
      return i + 1; // return index of pivot
  }

  void sort(ArrayList<Integer> arr, int first, int last) // main function
  {
      if (first >= last) { // base case: empty array
          return;
      }
  
      int pivot = partition(arr, first, last); // find index of pivot and sort on either side
      sort(arr, first, pivot - 1); // recursive calls for each side of the pivot
      sort(arr, pivot + 1, last);
  }

}
