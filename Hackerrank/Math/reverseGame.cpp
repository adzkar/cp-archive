#include <iostream>
using namespace std;

int main() {
  unsigned int t;cin >> t;
  while(t-- > 0) {
    int n,k;cin >> n >> k;
    int ans = (k >= n/2) ? (n-1-k)*2:2*k+1;
    cout << ans << endl;
  }
  return 0;
}
