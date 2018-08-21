#include <iostream>
#include <string>

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

int binaryToNumber(string kata) {
    int x;

}

int main() {

    int n;
    string kata[n];
    for(int i = 0;i < n;i++) {
        cin >> kata[i];
        convertToBinary(kata[i]);
    }





    return 0;
}
