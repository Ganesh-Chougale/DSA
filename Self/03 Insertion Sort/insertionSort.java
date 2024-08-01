public class insertionSort{
    public static void main(String[] args) {
        int [] myArr = {9,0,8,1,7,2,6,3,5,4};
        insertionSort(myArr);
        System.out.print("Insertion Sort : ");
        for(int k = 0; k<myArr.length; k++){
            System.out.print(myArr[k]+" ");
        }
        
    }

    public static void insertionSort(int[] arr) {
        int size = arr.length;

        for(int i = 1; i<size; i++){
            int key = arr[i];
            int j = i-1;
            while(j>=0 && arr[j]>key){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = key;
        }

    }
}