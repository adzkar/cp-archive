#include <iostream>
#include <cmath>

using namespace std;

int main() {

    int a,b,c;
    int n;
    cin >> n;
    while(n--){
        cin >> a >> b >> c;
        puts((abs(a-c) == abs(b-c) ? "Mouse C" : (abs(b-c) < abs(a-c) ? "Cat B" : "Cat A")));
    }


    return 0;
}