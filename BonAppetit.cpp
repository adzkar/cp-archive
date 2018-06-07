#include <iostream>

using namespace std;

int main() {

    int n,k,totalHutang = 0;
    cin >> n >> k;
    unsigned int bill[n];

    for(int i = 0;i < n;i++) cin >> bill[i];

    for(int i = 0;i < n;i++) { if(i != k) totalHutang += bill[i]; }

    totalHutang /= 2;
    int b;
    cin >> b;
    b -= totalHutang;

    ( b == 0) ? cout << "Bon Appetit" : cout << b;

    cout << endl;


    return 0;
}