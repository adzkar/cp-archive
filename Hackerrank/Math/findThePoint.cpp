#include <bits/stdc++.h>
using namespace std;
int main() {
  int n;cin >> n;
  while(n-- > 0) {
    pair<int, int> p,q;
    cin >> p.first >> p.second >> q.first >> q.second;
    cout << (q.first-p.first)+q.first << " " << (q.second-p.second)+q.second << endl;
  }
  return 0;
}
