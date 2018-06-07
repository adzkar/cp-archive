#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main() {

    long int A,B,C;
    vector<long int> angka (3);
    for(int i = 0;i < 3;i++) {
        cin >> angka[i];
    }

    sort(angka.begin(), angka.end());
    A = angka[2];
    B = angka[1];
    C = angka[0];
    cout << A << " " << B << " " << C << endl;

    return 0;
}