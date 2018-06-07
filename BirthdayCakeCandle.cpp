#include <bits/stdc++.h>

using namespace std;

int main() {

    int n;
    cin >> n;
    vector<int> angka(n);    

    for(int i = 0;i < n;i++) {
        scanf("%i", &angka[i]);
    }

    sort(angka.begin(), angka.end());
    int total = 0;
    for(int i = 0;i < n;i++) {
        if(angka[n-1] == angka[i]) total++;
    }

    printf("%i\n", total);

    return 0;
}