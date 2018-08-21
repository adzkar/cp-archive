#include <iostream>

using namespace std;

int main() {

    int x;
    cin >> x;
    for(int i = 1;i <= ((2*x)+1);i++) {
        if(i != x + 1) {
            for(int j = 1;j <= x;j++) cout << " ";
            cout << "*" << endl;
        } else {
            for(int j = 1;j<=((2*x)+1);j++) cout << "*";
            cout << endl;
        }
    }

    return 0;
}