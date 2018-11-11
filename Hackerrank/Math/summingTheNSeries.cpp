#include <iostream>
using namespace std;
#define modnya 1000000007
int main() {
  int n;cin >> n;
  for(int i = 0;i < n;i++) {
      unsigned long long int a;cin >> a;
      cout << ((a%modnya)*(a%modnya))%modnya << endl;
  }
  return 0;
}
