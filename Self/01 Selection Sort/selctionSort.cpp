#include <iostream>
using namespace std;
int myArr[8] = {98, 12, 87, 23, 76, 34, 65, 56};
int main(){
    for(int i=0;i<8; i++){
        int temp;
        for(int j=i+1;j<8;j++){
            if(myArr[i]>myArr[j]){
                temp = myArr[i];
                myArr[i] = myArr[j];
                myArr[j] = temp;
            }
        }
    cout <<myArr[i] <<" ";
    }
    return 0;
}