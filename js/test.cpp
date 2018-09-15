// ctrl +shift +b

#include <stdio.h> 
#include <iostream>
using namespace std;

//两个数的最大公约数
int GCD(int a, int b) {
    if (b == 0) return a;
    if (a >= b) return GCD(b, a % b);
}
//两个数的最大公倍数
int commonMultiple(int a, int b) {
    return a * b / GCD(a, b);
}


int main() {
    int m, n;
    cin >> m >> n;
    int out1 = GCD(m, n);
    int out2 = commonMultiple(m, n);


    cout << out1<<endl;
    cout<<out2;
    return 0;
}
