#include <iostream>

using namespace std;

int main() {

    unsigned int n;
    cin >> n;
    int p[n]x[100];
    for(int i = 1;i <= n;i++) cin >> p[i];

    int j;
    for(int i = 1;i <= n;i++) x[p[p[i]]] = i;
    for(int i = 1;i <= n;i++) cout << x[i] << endl;

    cout << endl;
    return 0;
}