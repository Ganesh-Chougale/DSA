public class SelectionSort {
    public static void main(String[] args) {

        int [] myArr = {9,0,8,1,7,2,6,3,5,4};
        selectionSort(myArr);
        System.out.print("selection sort : ");
        for(int num : myArr){
            System.out.print(num + " ");
        }

    }

    public static void selectionSort(int[] arr) {
        int size = arr.length;

        for(int i = 0; i<size; i++){

            for(int j = i+1; j<size; j++){
                if(arr[j]<arr[i]){
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }

        }

    }
}
