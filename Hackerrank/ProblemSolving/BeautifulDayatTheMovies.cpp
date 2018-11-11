#include <iostream>
#include <string>

using namespace std;

int flip(int x) {
    string b;
    string a = to_string(x);
    int j = a.length()-1;
    for(int i = 0;i < a.length();i++) {
        b[i] = a[j];
        j--;
    }
    int y = stoi(b);
    return y;
}

int main() {

    unsigned long int i,j;
    unsigned long long int k;
    cin >> i >> j >> k;
    int total = 0;
    for(int z = i;z <= j;z++) {
        ((abs(z-flip(z)) % 6) == 0) ? total++:total;
    }

    cout << total << endl;

    return 0;
}