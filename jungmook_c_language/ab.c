#include<stdio.h>

int getMax1(int[], int);
int getMax2(int *,int);
int getMax3(int *,int);



int main(){
    int max, numbers[10] = {34,56,33,23,99,33,45, 67,89,91};
    
    max = getMax1(numbers, 10);
    printf("max: %d\n", max);
    max = getMax2(numbers, 10);
    printf("max: %d\n",max);
    max = getMax3(numbers, 10);
    printf("max: %d\n",max);
}

int getMax1(int numbers[], int n){
    int i, max;

    max = numbers[0];
    for(i=1;i<n;i++){
        if(max < numbers[i])  max= numbers[i];
    }
    return max;
}

int getMax2(int* pnumbers, int n){
    int i, max;

    max = *pnumbers;
    for(i=1;i<n;i++){
        if(max < *(pnumbers+i)) max = *(pnumbers+i);
    }
    return max;
}

int getMax3(int* pnumbers, int n){
    int i,max;

    for(max=*(pnumbers), i=1; i<n; i++,pnumbers++)
        if (max< *pnumbers) max= *pnumbers;
    return max;
}
