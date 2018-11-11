#include <iostream>
using namespace std;
#define cin(n) int n;cin >> n
int main() {
  cin(n);
  while(n-- > 0) {
    unsigned long long int a;cin >> a;
    cout << a*(a-1)/2 << endl;
  }
  return 0;
}
