#include <iostream>
using namespace std;
typedef unsigned long int uli;

int main() {
  uli n,m, ans = 0;cin >> n >> m;
  for(int i = 0;i < m;i++) {
    uli a,b,k;cin >> a >> b >> k;
    ans += ((b-a)+1)*k;
  }
  cout << ans/n << endl;
  return 0;
}
