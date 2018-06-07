#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cin >> n;
    int angka[n][n];
    int pertama = 0,kedua = 0;

    for(int i = 0;i < n;i++) {
        for(int j = 0;j < n;j++) {
            cin >> angka[i][j];
        }
    }
    int j = n-1;
    for(int i = 0;i < n;i++) {
        kedua += angka[i][j];
        pertama += angka[i][i];
        j--;
    }
    
    cout << abs(pertama-kedua);



    return 0;
}