#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;

int main() {
  unsigned int n;cin >> n;
  while(n-- > 0) {
    unsigned int l,b, ans = 0, i = 1;cin >> l >> b;
    unsigned int gcd = __gcd(l,b), greatest = (l >= b) ? l:b;
    while(pow(gcd,2)*i <= (l*b)) {
      if(pow(gcd,2)*i == (l*b)) ans = i;
      i++;
    }
    cout << ans << endl;
  }
  return 0;
}
