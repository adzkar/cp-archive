#include <bits/stdc++.h>

using namespace std;

int main() {

    int angka[5];
    for(int i = 0; i < 5;i++) scanf("%i", &angka[i]);

    vector<int> total(5);

    for(int i = 0;i < 5;i++) {
        for(int j = 0; j < 5;j++) {
            if(i != j) total[i] += angka[j];
        }
    }

    sort(total.begin(), total.end());

    printf("%i %i\n", total[0], total[4]);

    return 0;
}