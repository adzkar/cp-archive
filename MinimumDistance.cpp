#include <bits/stdc++.h>

using namespace std;

int main() {

    int n;cin >> n;
    vector<long int> x(n);
    for(int i = 0;i < n;i++) cin >> x[i];

    int min = 100000;
    for(int i = 0;i < n;i++)
            for(int j = i+1;j <n;j++)
                if(x[i] == x[j])
                    if(abs(i-j) < min) min = abs(i-j);

    if(min == 100000) min = -1;

    cout << min << endl;

    return 0;
}