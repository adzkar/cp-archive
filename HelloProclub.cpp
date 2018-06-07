#include <iostream>
#include <string>

using namespace std;


int main() {

    string kata;
    int n;

    getline(cin, kata);
    cin >> n;

    cout << kata;
    for(int i = 0;i < n;i++) {
        cout << "!";
    }
    cout << endl;


    return 0;
}