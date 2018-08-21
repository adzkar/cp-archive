#include <bits/stdc++.h>

using namespace std;

int main() {

    unsigned int n,k;
    cin >> n >> k;
    vector<int> ar (n);
    for(int i = 0;i < n;i++) cin >> ar[i];

    sort(ar.begin(), ar.end());

    if(ar[n-1] > k) {
        k = ar[n-1] - k;
    } else {
        k = 0;
    }

    // cout << hasil << endl;
    cout << k << endl;




    return 0;
}