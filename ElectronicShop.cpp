#include <bits/stdc++.h>

using namespace std;


int main() {

    int n,b,m;
    cin >> b >> n >> m;
    long int keyboard[n],mouse[m];
    for(int i = 0;i < n;i++) cin >> keyboard[i];
    for(int i = 0;i < m;i++) cin >> mouse[i];
    
    int min = 0;

    for(int i = 0;i < n;i++) {
        for(int j = 0;j < m;j++) {
            if((b - (keyboard[i] + mouse[j])) < min) {
                min = max(min, keyboard[i] + mouse[j]);
            }
        }
    }

    if(min == 0) min = -1;

    cout << min << endl;

    return 0;
}