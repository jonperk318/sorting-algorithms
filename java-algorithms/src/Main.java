import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws FileNotFoundException {

        // get sizes of sample arrays
        final ArrayList<Integer> sampleSizes = getSampleSizes();

        // build array of arrays with samples to sort
        final ArrayList<ArrayList<Integer>> samples = getSamples(sampleSizes);

        Utils.printArray(samples.getFirst());

        // run all sorting functions
        ArrayList<Double> insertionTimes = new ArrayList<>(), mergeTimes = new ArrayList<>(),
                quickTimes = new ArrayList<>(), selectionTimes = new ArrayList<>(), heapTimes = new ArrayList<>(),
                countingTimes = new ArrayList<>(), radixTimes = new ArrayList<>(), bubbleTimes = new ArrayList<>();
        long tick, tock;
        int count = 0;

        for (ArrayList<Integer> sample : samples) {

            // Insertion sort
            ArrayList<Integer> testArrInsertionSort = new ArrayList<Integer>(sample);
            InsertionSort insertionSort = new InsertionSort();
            tick = System.nanoTime();
            insertionSort.sort(testArrInsertionSort);
            tock = System.nanoTime();
            insertionTimes.add((double) (tock - tick) / 1_000_000_000);

            // Merge sort
            ArrayList<Integer> testArrMergeSort = new ArrayList<Integer>(sample);
            MergeSort mergeSort = new MergeSort();
            tick = System.nanoTime();
            mergeSort.sort(testArrMergeSort, 0, testArrMergeSort.size() - 1);
            tock = System.nanoTime();
            mergeTimes.add((double) (tock - tick) / 1_000_000_000);

            // Quick sort
            ArrayList<Integer> testArrQuickSort = new ArrayList<Integer>(sample);
            QuickSort quickSort = new QuickSort();
            tick = System.nanoTime();
            quickSort.sort(testArrQuickSort, 0, testArrQuickSort.size() - 1);
            tock = System.nanoTime();
            quickTimes.add((double) (tock - tick) / 1_000_000_000);

            // Selection sort
            ArrayList<Integer> testArrSelectionSort = new ArrayList<Integer>(sample);
            SelectionSort selectionSort = new SelectionSort();
            tick = System.nanoTime();
            selectionSort.sort(testArrSelectionSort);
            tock = System.nanoTime();
            selectionTimes.add((double) (tock - tick) / 1_000_000_000);

            // Heap sort
            ArrayList<Integer> testArrHeapSort = new ArrayList<Integer>(sample);
            HeapSort heapSort = new HeapSort();
            tick = System.nanoTime();
            heapSort.sort(testArrHeapSort);
            tock = System.nanoTime();
            heapTimes.add((double) (tock - tick) / 1_000_000_000);

            // Counting sort
            ArrayList<Integer> testArrCountingSort = new ArrayList<Integer>(sample);
            tick = System.nanoTime();
            CountingSort.sort(testArrCountingSort);
            tock = System.nanoTime();
            countingTimes.add((double) (tock - tick) / 1_000_000_000);

            // Radix sort
            ArrayList<Integer> testArrRadixSort = new ArrayList<Integer>(sample);
            tick = System.nanoTime();
            selectionSort.sort(testArrRadixSort);
            tock = System.nanoTime();
            radixTimes.add((double) (tock - tick) / 1_000_000_000);

            // Bubble sort
            ArrayList<Integer> testArrBubbleSort = new ArrayList<Integer>(sample);
            BubbleSort bubbleSort = new BubbleSort();
            tick = System.nanoTime();
            bubbleSort.sort(testArrBubbleSort);
            tock = System.nanoTime();
            bubbleTimes.add((double) (tock - tick) / 1_000_000_000);

            System.out.println("Sorted array of length: " + sampleSizes.get(count));
            count ++;

        }

        // write sorting times to separate files
        ArrayList<ArrayList<Double>> sortingTimes = new ArrayList<>();
        sortingTimes.add(insertionTimes);
        sortingTimes.add(mergeTimes);
        sortingTimes.add(quickTimes);
        sortingTimes.add(selectionTimes);
        sortingTimes.add(heapTimes);
        sortingTimes.add(countingTimes);
        sortingTimes.add(radixTimes);
        sortingTimes.add(bubbleTimes);
        String[] sortingNames = {"insertion-sort", "merge-sort", "quick-sort", "selection-sort",
                "heap-sort", "counting-sort", "radix-sort", "bubble-sort"};

        for (int i = 0; i < sortingTimes.size(); i++) {

            try (PrintWriter out = new PrintWriter("java-sorting-times/java-" +
                    sortingNames[i] + "-times.txt")) {

                for (Double time : sortingTimes.get(i)) {
                    out.write(time + ",");
                }

            }

        }

    }

    private static ArrayList<ArrayList<Integer>> getSamples(ArrayList<Integer> sampleSizes) {

        ArrayList<ArrayList<Integer>> samples = new ArrayList<>();

        for (Integer sampleSize : sampleSizes) {

            File f = new File("../samples/" + sampleSize + ".txt");

            try (Scanner in = new Scanner(f)) {

                String line = in.nextLine();
                String[] sampleString = line.split(",");
                ArrayList<Integer> temp = new ArrayList<>();

                for (String sample : sampleString) {
                    int value = Integer.parseInt(sample);
                    temp.add(value);
                }

                samples.add(temp);

            } catch (FileNotFoundException e) {
                throw new RuntimeException(e);
            }
        }
        return samples;
    }

    private static ArrayList<Integer> getSampleSizes() {
        File sampleSizesFile = new File("../samples/sample-sizes.txt");
        ArrayList<Integer> sampleSizes = new ArrayList<>();

        // read sample sizes file to an array
        try (Scanner ssIn = new Scanner(sampleSizesFile)) {
            String line = ssIn.nextLine();
            String[] sampleSizesString = line.split(",");

            for (String sample : sampleSizesString) {
                int value = Integer.parseInt(sample);
                sampleSizes.add(value);
            }

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        return sampleSizes;
    }

}