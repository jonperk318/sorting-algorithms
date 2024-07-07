import java.util.ArrayList;

public class InsertionSort {

    void sort(ArrayList<Integer> arr) {

        int length = arr.size();

        for (int i = 1; i < length; ++i) {

            int key = arr.get(i);
            int j = i - 1;

            while (j >= 0 && arr.get(j) > key) {
                arr.set(j + 1, arr.get(j));
                j--;
            }

            arr.set(j + 1, key);

        }

    }

}
