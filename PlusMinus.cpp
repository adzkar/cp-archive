#include <bits/stdc++.h>

using namespace std;

int main() {

    double n,positif = 0,negatif = 0,nol = 0,angka;
    cin >> n;
    for(int i = 0;i < n;i++) {
        cin >> angka;
        if(angka > 0) {
            positif++;
        } else if (angka < 0) {
            negatif++;
        } else {
            nol++;
        }
    }
    
    cout << positif/n << endl;
    cout << negatif/n << endl;
    cout << nol/n << endl;



    return 0;
}