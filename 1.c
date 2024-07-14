#include<stdio.h>
int main(){
    char operators;
    printf("enter a operator (+,-,*,/):");
    scanf("%c",&operators);
    printf("%d\n\n"  , operators);
    float n1,n2;
    printf("enter first number :");
    scanf("%f",&n1);
     printf("enter second  number :");
    scanf("%f",&n2);

    
    switch(operators){
        case '+':
        printf("%f + %f = %f",n1,n2,n1+n2);
        break;
        default:
        printf("Please Try Again ");
        break;
    }
    return 0;
}


