#include <bits/stdc++.h>
using namespace std;

int main() {

    int n,d,total = 0;
    cin >> n >> d;
    unsigned int angka[n];
    for(int i = 0;i < n;i++) cin >> angka[i];
    
    // proses menghitung
    for(int i = 0;i < n;i++) {
        int x = 0;
        for(int j = i-1;j >= 0;j--) {
            if(angka[j] == angka[i] - d) x++;
            if(angka[j] < angka[i] - d) break;
        }
        for(int j = i+1;j < n;j++) {
            if(angka[j] == angka[i] + 2) x++;
            if(angka[j] > angka[i] + d) break;
        }
        if(x == 2) total++; 
    }

    cout << total << endl;

    return 0;
}