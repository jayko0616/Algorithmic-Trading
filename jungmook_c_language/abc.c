#include<stdio.h>

int getInteger();
double computeVelocity(int,int,int);
void printResult(int,int,int,double);
int getIntegers();



int main(void){
    int distance, min,sec;
    double velocity;

    distance = getIntegers();

    min = getInteger(); sec = getInteger();

    velocity = computeVelocity(distance, min, sec);

    printResult(distance, min, sec, velocity);
}

int getIntegers(){
    int num;
    scanf("%d", &num);
    return num;
}


int getInteger(){
    int num;
    scanf("%d",&num);
    return num;
}

double computeVelocity(int distance, int min, int sec){
    double vel;
    double mile;
    double time;
    mile = distance / (double)5280;
    time = (double)min / (double)60 + (double)sec/ (double)3600;
    // 1 mile = 1.609344 km 
    // printf("%lf",mile);
    vel = mile/time;
    // printf("%lf", vel);
    return vel;
}

void printResult(int distance, int min, int sec, double velocity){
    printf("%d , %d , %d , %lf", distance, min, sec, velocity);
}


// 0.0378 mile 
//0.06096

// 0.0608 km / 0.033h + 0.0083h