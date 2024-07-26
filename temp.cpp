#include <iostream>
using namespace std;
int factorial(int num){
    if(num<2){
        return num;
    }else{
    return num*factorial(num-1);
}
}
int main(){
    cout <<factorial(6) <<endl;
};