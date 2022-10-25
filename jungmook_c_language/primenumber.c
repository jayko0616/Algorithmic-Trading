#include<stdio.h>

int main(){
    int number, N;
    scanf("%d", &number);
    N = number;
    for(int i=2;i<=N;i++){
        for(int j=2;j<i;j++){
            if(i % j == 0){
                number--;
                break;
            }
        }
    }
    printf("%d",number);
}

