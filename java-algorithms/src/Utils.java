import java.util.ArrayList;

public class Utils {

    static void printArray(ArrayList<Integer> arr)
    {
        int n = arr.size();
        for (Integer integer : arr) System.out.print(integer + " ");
        System.out.println();
    }
}
