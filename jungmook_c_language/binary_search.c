#include<stdio.h>

int main(){
    int arr[7] = {1,3,4,7,10,12,17};
    int low = 0;
    int high = sizeof(arr)/sizeof(int) - 1;
    int middle, N;
    int k = 0;
    scanf("%d",&N);
    while(low <= high){
        middle = (high + low) / 2;
        if(N == arr[middle]){
            printf("%d\n", middle);
            k = 1;
            break;
        }
        else if(N > arr[middle]){
            low = middle+1;
            // printf("%d\n",middle);
        }
        else{
            high = middle-1;
            // printf("%d\n",middle);
        }
    }
    if(k == 0){
        printf("찾는 숫자가 없습니다.");
    }
    
}