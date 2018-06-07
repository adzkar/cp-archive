#include <iostream>
#include <string>

using namespace std;

int main() {

    int T;
    cin >> T;
    int a;
    for(int i = 0;i < T;i++) {
        cin >> a;
        int H = 1;
        for(int j = 1;j <= a;j++)
            if(j % 2 != 0) H *= 2; else H += 1;
        cout << H << endl;
    }



    return 0;
}