#include<stdio.h>

// 1
// int addTwoNumbers(int,int);

// int main(){
//     int x,y;
// int sum;
//     scanf("%d %d",&x,&y);
//     sum = addTwoNumbers(x,y);
//     sum = addTwoNumbers(2,3);
//     printf("sum of %d and %d = %d",x,y,sum);
// }

// int addTwoNumbers(int x, int y){
//     int sum;

//     sum = x + y;
//     return sum;
// }

// 2
// typedef int* pint;
// int sum;
// void addTwoNumbers(int x, int y, pint psum);

// int main(){
//     int x,y;
//     addTwoNumbers(x,y,&sum);
//     addTwoNumbers(2,3,&sum);
//     printf("sum of %d and %d = %d", x,y,sum);
// }

// void addTwoNumbers(int x,int y,pint psum){
//     *psum = x+y;
// }


// 3 
// int sum;
// void addTwoNumbers(int x,int y);

// int main(){
//     int x,y;

//     scanf("%d %d",&x,&y);
//     addTwoNumbers(x,y);
//     printf("sum of %d and %d = %d", x,y,sum);
// }

// void addTwoNumbers(int x, int y){
//     sum = x + y;
// }

// 4

// int getNumbers(int numbers[], int max);
// void sortNumbers(int numbers[], int n);
// void printNumbers(int numbers[], int n);
// #define MAX 100



// int main(){
//     int n;
//     int numbers[MAX];
//     n = getNumbers(numbers , MAX);
//     sortNumbers(numbers, n);
//     printNumbers(numbers, n);
// }

// int getNumbers(int numbers[], int max){
//     int n = 0;
//     for(int i=0;i<max;i++){
//         scanf("%d",&n);
//         if(n == -1){
//             return (i);
//         }
//         else{
//             numbers[i] = n;
//         }
//     }
// }

// void sortNumbers(int numbers[], int n){
//     for(int i=0;i<n;i++){
//         for(int j=i+1;j<n;j++){
//             if(numbers[i] > numbers[j]){
//                 int tmp = numbers[j];
//                 numbers[j] = numbers[i];
//                 numbers[i] = tmp;
//             }
//         }
//     }
// }

// void printNumbers(int numbers[], int n){
//     for(int i=0;i<n;i++){
//         printf(" %d ",numbers[i]);
//     }
// }


// 5 

// typedef int* pint;
// int getNumbers2(pint numbers, int max);
// void sortNumbers2(pint numbers, int n);
// void printNumbers2(pint numbers, int n);
// #define MAX 100



// int main(){
//     int n;
//     int numbers[MAX];

//     n = getNumbers2(numbers , MAX);
//     sortNumbers2(numbers, n);
//     printNumbers2(numbers, n);
// }

// int getNumbers2(pint numbers, int max){
//     int n = 0;
    
//     for(int i=0;i<max;i++){
//         scanf("%d",&n);
//         if(n == -1){
//             return (i);
//         }
//         else{
//             *(numbers+i) = n;
//         }
//     }
// }

// void sortNumbers2(pint numbers, int n){
//     for(int i=0;i<n;i++){
//         for(int j=i+1;j<n;j++){
//             if(*(numbers+i) > *(numbers+j)){
//                 int tmp = *(numbers+j);
//                 *(numbers+j) = *(numbers+i);
//                 *(numbers+i) = tmp;
//             }
//         }
//     }
// }

// void printNumbers2(pint numbers, int n){
//     for(int i=0;i<n;i++){
//         printf(" %d ",*(numbers+i));
//     }
// }


