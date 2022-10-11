#include<stdio.h>
#define SIZE 16

int main(){
    int key;    
    int grade[SIZE] = {2,6,11,13,18,20,22,27,29,30,34,38,41,42,45,47};
    int low, high, middle, found;

    printf("탐색할 값을 입력하시오.");
    scanf("%d",&key);
    low = 0; high = SIZE-1; found = -1 ;
    while(low <= high){
        printf("[%d %d]\n", low, high);
        middle = (low+high)/2;
        if(key == grade[middle]){
            found = middle;
            break;
        }
        else if(key > grade[middle])
            low = middle + 1;
        else
            high = middle -1;
    } 
    if(found == -1) printf("no such data");
    else printf("탐색 결과 = %d\n", found);

}   