#include <bits/stdc++.h>
using namespace std;
int main() {
  unsigned long int n,m; cin >> n >> m;
  cout << ((n+(n%2))*(m+(m%2)))/4 << endl;
  return 0;
}
