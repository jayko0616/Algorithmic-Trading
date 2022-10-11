
 
/* 1.c:numbers
   김정묵,2022_10_06
   */

#include<stdio.h>

int main(){
    double input_mat[3][3]; // 맨처음에 받는 행렬
    double inv_mat[3][3]; // 내가 구할 역행렬
    double b[3]; // 내가 받을 b값
    double x[3]; // 내가 구할 x값
    // int det;
    double det, temp; // determinent 값은 역행렬을 구하는 데에 있어서 필요한 값과 temp는 교환하는 데에 있어서 필요한 변수이다.
    for(int i=0;i<3;i++){
        scanf("%lf %lf %lf",&input_mat[i][0],&input_mat[i][1],&input_mat[i][2]);
    }
    scanf("%lf %lf %lf",&b[0], &b[1], &b[2]);

    /* det값 구하기*/
    det = ((input_mat[0][0] * (input_mat[1][1]*input_mat[2][2] - input_mat[1][2]*input_mat[2][1]) - input_mat[0][1] 
    * (input_mat[1][0] * input_mat[2][2] - input_mat[1][2]*input_mat[2][0])+ input_mat[0][2] 
    * (input_mat[1][0] * input_mat[2][1] - input_mat[1][1] * input_mat[2][0])));
    
    /* 전치행렬 만들기 */ 
    for(int i=0;i<3;i++){
        for(int j=i+1;j<3;j++){
            temp = input_mat[i][j];
            input_mat[i][j] = input_mat[j][i];
            input_mat[j][i] = temp;
        }
    }
    // 역행렬 구하기 
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            inv_mat[i][j] = ( 1.0 / det ) * ((input_mat[(i+1)%3][(j+1)%3] * input_mat[(i+2)%3][(j+2)%3])
                - (input_mat[(i+1)%3][(j+2)%3]) * input_mat[(i+2)%3][(j+1)%3]);  
            
        }
    }
    
    // for(int i=0;i<3;i++){
    //     for(int j=0;j<3;j++){
    //         printf(" %lf ",inv_mat[i][j]);
    //     }
    //     printf("\n");
    // }     
    
    for(int i=0;i<3;i++){
        x[i] = inv_mat[i][0] * b[0] + inv_mat[i][1] * b[1] + inv_mat[i][2] * b[2];
    }
    printf("%lf %lf %lf",x[0],x[1],x[2]);
}
