/* abcd.c; calculator
   2022.11.03; 김정묵 */



#include<stdio.h>

void scanNumbers(int*, int*);
void computeSumdiffMulDiv(int,int,int*,int*,int*,double*);
void printResult(int,int,int,int, int,double);

int main(){
    int x,y,sum,diff,mul;
    double div;
    scanNumbers(&x, &y);
    computeSumdiff(x,y,&sum,&diff,&mul,&div);
    printResult(x,y,sum,diff,mul,div);
}

void scanNumbers(int *px, int *py){
    printf("Enter two nubmers : ");
    scanf("%d %d", px, py);
}

void computeSumdiffMulDiv(int x,int y,int* psum, int* pdiff, int* pmul, double* pdiv){
    *psum = x+y;
    *pdiff = x-y;
    *pmul = x*y;
    *pdiv = (double)x/(double)y;
}

void printResult(int x,int y,int sum,int diff, int mul,double div){
    printf("%d %d %d %lf", sum, diff, mul, div);
}