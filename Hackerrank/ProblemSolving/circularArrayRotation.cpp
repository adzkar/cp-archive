#include <iostream>
using namespace std;

int main() {
    int n, k, q, cont;
    cin >> n >> k >> q;
    int nums[n];
    for(int i = 0;i < n;i++) cin >> nums[(i+k)%n];
    for(int i = 0;i < q;i++) {
        int index;
        cin >> index;
        cout << nums[index] << endl;
    }
    return 0;
}