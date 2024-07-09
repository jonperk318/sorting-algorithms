import java.util.ArrayList;
import java.util.Arrays;

public class Tester {
    public static void main(String[] args) {

        ArrayList<Integer> testArr = new ArrayList<>
                (Arrays.asList(3,6,7,2,4,90,43,103,2,30234,56,5,3,2,76,43,34,102,9));
        System.out.println();
        System.out.print("Unsorted test array:\t");
        Utils.printArray(testArr);

        // Insertion sort test
        ArrayList<Integer> testArrInsertionSort = testArr;
        InsertionSort insertionSort = new InsertionSort();
        insertionSort.sort(testArrInsertionSort);
        System.out.print("Insertion Sort test:\t");
        Utils.printArray(testArrInsertionSort);

        // Merge sort test
        ArrayList<Integer> testArrMergeSort = testArr;
        MergeSort mergeSort = new MergeSort();
        mergeSort.sort(testArrMergeSort, 0, testArrMergeSort.size() - 1);
        System.out.print("Merge Sort test:\t");
        Utils.printArray(testArrMergeSort);

        // Quick sort test


        System.out.println();
    }
}