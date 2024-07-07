import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        ArrayList<Integer> testArr = new ArrayList<>
                (Arrays.asList(3,6,7,2,4,90,43,103,2,30234,56,5,3,2,76,43,34,102,9));

        // Test insertion sort
        ArrayList<Integer> testArrInsertionSort = testArr;
        InsertionSort insertionSort = new InsertionSort();
        insertionSort.sort(testArrInsertionSort);
        System.out.println();
        System.out.print("Insertion Sort test: ");
        Utils.printArray(testArrInsertionSort);
    }
}