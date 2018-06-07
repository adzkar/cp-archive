#include <iostream>
#include <string>

using namespace std;

int main() {

    unsigned long int n;cin >>n;
    string perintah;
    long int x = 0,y;
    for(int i = 0;i < n;i++) {
        cin >> perintah >> y;
        if(perintah == 'add') {
            if(y > 0) x += y;
        }
        if(perintah == 'set') {
            if(y > x) x = y;
        }
    }

    cout << x << endl;


    return 0;
}