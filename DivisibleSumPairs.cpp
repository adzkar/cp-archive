#include <iostream>

using namespace std;


int main() {

    int n,k;
    cin >> n >> k;
    int a[n];
    for(int i = 0;i < n;i++) cin >> a[i];

    int total = 0;
    for(int i = 0;i < n;i++) {
        if(i + 1 < n) {
            for(int j = i+1;j < n;j++) {
                if((a[i] + a[j]) % k == 0) total++;
            }
        }
    }

    cout << total << endl;  

    return 0;
}