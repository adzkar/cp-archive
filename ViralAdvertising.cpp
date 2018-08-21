#include <iostream>

using namespace std;

int main() {

    int n;cin >> n;
    int total = 0,awal = 5;
    for(int i = 1;i <= n;i++) {
        awal = awal/2;
        total += awal;
        awal *= 3;
    }

    cout << total << endl;

    return 0;
}