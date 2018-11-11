#include <bits/stdc++.h>
using namespace std;
#define insInt(x) int x; cin >> x;
int main() {
  insInt(n);
  for(int i = 0;i < n;i++) {
    insInt(t);
    int ans = 1;
    for(int i = 0;i < (t-1);i++) {
      insInt(a);
      ans *= a;
      ans %= 1234567;
    }
    cout << (ans%1234567) << endl;
  }
  return 0;
}
