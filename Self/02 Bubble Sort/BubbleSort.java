public class BubbleSort {

    public static void main(String[] args) {
        int[] myArr = {9,0,8,1,7,2,6,3,5,4};
        BubbleSort(myArr);
        System.out.print("Bubble Sort : ");
        for(int k = 0; k<=myArr.length-1;k++){
            System.out.print(myArr[k]+" ");
        }
    }

    public static void BubbleSort(int[] arr) {
    int size = arr.length-1;
    
    for(int i = 0; i<=size; i++){
        for(int j = 0; j<=size-i-1; j++){
            if(arr[j+1]<arr[j]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    }
}
