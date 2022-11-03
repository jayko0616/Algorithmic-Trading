/*
   2022920017 cal.c
   2022-10-27 김정묵 
    */

void cal(char,char,char);
#include<stdio.h>
int main(){
    char a,b,c;

    a = getchar();
    b = getchar();
    c = getchar();
    cal(a,b,c);
}

void cal(char a, char b, char c){
    int sum = 0;
    
    if(b == '+'){
        sum = (a - '0') + (c - '0');
    }
    else if(b == '-'){
        sum = (a - '0') - (c - '0');
    }
    else if(b == '*'){
        sum = (a - '0') * (c - '0');
    }
    else if(b == '/'){
        sum = (a - '0') / (c - '0');
    }

    printf("%d", sum);
}

