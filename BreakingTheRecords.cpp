#include <bits/stdc++.h>
// #include <vector>

using namespace std;

int main() {

    int n;
    cin >> n;
    vector<long int> x(n);
    for(int i = 0;i < n;i++) cin >> x[i];

    // sort(x.begin(), x.end());
    int max = x[0],min = x[0];
    int a = 0,b = 0;
    for(int i = 1;i < n;i++) {
        if(max < x[i]) { 
            max = x[i];
            a++;
        }
        if(min > x[i]) {
            min = x[i];
            b++;
        }
    }
    cout << a << b << endl;

    return 0;
}