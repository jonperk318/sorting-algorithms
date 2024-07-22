import java.util.ArrayList;
import java.util.Arrays;

public class Test {
    public static void main(String[] args) {

        ArrayList<Integer> testArr = new ArrayList<>
                (Arrays.asList(3, 6, 7, 2, 4, 90, 43, 103, 2, 30234, 56, 5, 3, 2, 76, 43, 34, 102, 9));
        System.out.println();
        System.out.print("Unsorted test array:\t");
        Utils.printArray(testArr);

        // Insertion sort test
        ArrayList<Integer> testArrInsertionSort = new ArrayList<Integer>(testArr);
        InsertionSort insertionSort = new InsertionSort();
        insertionSort.sort(testArrInsertionSort);
        System.out.print("Insertion Sort test:\t");
        Utils.printArray(testArrInsertionSort);

        // Merge sort test
        ArrayList<Integer> testArrMergeSort = new ArrayList<Integer>(testArr);
        MergeSort mergeSort = new MergeSort();
        mergeSort.sort(testArrMergeSort, 0, testArrMergeSort.size() - 1);
        System.out.print("Merge Sort test:\t");
        Utils.printArray(testArrMergeSort);

        // Quick sort test
        ArrayList<Integer> testArrQuickSort = new ArrayList<Integer>(testArr);
        QuickSort quickSort = new QuickSort();
        quickSort.sort(testArrQuickSort, 0, testArrQuickSort.size() - 1);
        System.out.print("Quick Sort test:\t");
        Utils.printArray(testArrQuickSort);

        // Selection sort test
        ArrayList<Integer> testArrSelectionSort = new ArrayList<Integer>(testArr);
        SelectionSort selectionSort = new SelectionSort();
        selectionSort.sort(testArrSelectionSort);
        System.out.print("Selection Sort test:\t");
        Utils.printArray(testArrSelectionSort);

        // Heap sort test
        ArrayList<Integer> testArrHeapSort = new ArrayList<Integer>(testArr);
        HeapSort heapSort = new HeapSort();
        heapSort.sort(testArrHeapSort);
        System.out.print("Heap Sort test:\t\t");
        Utils.printArray(testArrHeapSort);

        // Counting sort test
        ArrayList<Integer> testArrCountingSort = new ArrayList<Integer>(testArr);
        CountingSort.sort(testArrCountingSort);
        System.out.print("Counting Sort test:\t");
        Utils.printArray(testArrCountingSort);

        // Radix sort test
        ArrayList<Integer> testArrRadixSort = new ArrayList<Integer>(testArr);
        RadixSort.sort(testArrRadixSort, testArrRadixSort.size());
        System.out.print("Radix Sort test:\t");
        Utils.printArray(testArrRadixSort);

        // Bubble sort test
        ArrayList<Integer> testArrBubbleSort = new ArrayList<Integer>(testArr);
        BubbleSort bubbleSort = new BubbleSort();
        bubbleSort.sort(testArrBubbleSort);
        System.out.print("Bubble Sort test:\t");
        Utils.printArray(testArrBubbleSort);

        System.out.println();
    }
}