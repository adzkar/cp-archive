#include <iostream>

using namespace std;

int main() {

    int n, flow = 0, valley = 0;
    cin >> n;
    char huruf;
    for(int i = 0;i < n;i++) {
        cin >> huruf;
        switch(huruf) {
            case 'U':
                flow++;
                if(flow == 0) valley++;
                break;
            case 'D':
                flow--;
                break;
        }
    }

    cout << valley << endl;

    return 0;
}
