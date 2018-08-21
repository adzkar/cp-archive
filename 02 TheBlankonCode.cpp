#include <iostream>
#include <string>
#include <sstream>
#include <cmath>

using namespace std;

string convertToBinary(string kata) {
    char a[kata.length()];
    for(int i = 0;i < kata.length();i++) {
        switch(kata[i]) {
            case '.' : a[i] = '0';
                break;
            case '-' : a[i] = '1';
                break;
        }
    }
    return a;
}

int binaryToDecimal(string biner) {
    int n = atoi(biner.c_str());
    int decimalNumber = 0, i = 0, remainder;
    while (n >= 0)
    {
        remainder = n%10;
        n = n / 10;
        decimalNumber += remainder*pow(2,i);
        ++i;
    }
    return decimalNumber;
}


int main() {

    int n,x;
    cin >> n;
    string kata[n];

    for(int i = 0;i < n;i++) {
        cin >> kata[i];
        kata[i] = convertToBinary(kata[i]);
        cout << binaryToDecimal(kata[i]) << endl;
    }   


    return 0;
}