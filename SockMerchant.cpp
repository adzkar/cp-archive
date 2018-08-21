#include <bits/stdc++.h>

using namespace std;

int main() {

    int n;
    cin >> n;
    vector<int> x(n);

    for(int i = 0;i < n;i++) cin >> x[i];

    sort(x.begin(), x.end());

    int total = 0;
    int i = 0;
    while(i < n) {
        if(i + 1 < n) {
            if(x[i] == x[i+1]) {
                total++;
                i++;
            }
        }
        i++;
    }

    cout << total << endl;

    return 0;
}