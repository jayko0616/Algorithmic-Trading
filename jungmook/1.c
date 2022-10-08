
 
/* 1.c:numbers
   김정묵,2022_10_06
   */

#include<stdio.h>

int main(){
    int dan, i, j;

    printf("구구단 몇 단까지?");
    scanf_s("%d", &dan);

    for(i=1;i<10;i++){
        if(i%2!=0){
            continue;
        }
        for(j=1;j<10;j++){
            if(i<j)break;
            printf("%d x %d = %d\n",i,j,i*j);
        }
        printf("\n");
    }
}