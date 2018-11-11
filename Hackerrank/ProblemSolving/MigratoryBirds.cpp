#include <bits/stdc++.h>

using namespace std;

int migratoryBirds(int n, vector <int> ar) {
    // Complete this function
    int j = 0;
    for(int i = 0;i < n;i++) if(ar[i] != ar[i+1] && ar[i] < 6) j++;
    return j;
}

int main() {
    int n;
    cin >> n;
    vector<int> ar(n);
    for(int ar_i = 0; ar_i < n; ar_i++){
       cin >> ar[ar_i];
    }
    sort(ar.begin(), ar.end());
    int result = migratoryBirds(n, ar);
    cout << result << endl;
    return 0;
}
