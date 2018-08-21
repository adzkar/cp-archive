#include <iostream>

using namespace std;

int main() {

    unsigned int year;
    cin >> year;

    int d = 0,i = 1;
    while(d < 256) {
        switch(i) {
            case 1 : d += 31; break;
            case 2 : {
                (year % 4 == 0) ? d += 29 : d += 28;
            }
                break;
            case 3 : d += 31; break;
            case 4 : d += 30; break;
            case 5 : d += 31; break;
            case 6 : d += 30; break;
            case 7 : d += 31; break;
            case 8 : d += 31; break;
            case 9 : d += 30; break;
            case 10 : d += 31; break;
            case 11 : d += 30; break;
            case 12 : d += 31; break;
        }
        i++;
    }

    d = 256 - d;
    cout << d <<"." << i + 1 << "." << year << endl;


    return 0;
}