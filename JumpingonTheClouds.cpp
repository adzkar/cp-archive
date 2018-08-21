#include <iostream>
#include <stack>

using namespace std;

int main() {
  int n,j = 0, i = 0;
  cin >> n;
  int clouds[n];
  for(int i = 0;i < n;i++) cin >> clouds[i];
  stack<int> passed;
  while(i < n && j < n) {
    (clouds[i+2] != 1) ? i += 2 : i += 1;
    passed.push(i);
    j++;
  }
  (passed.top() > n) ? cout << passed.size()-1 : cout << passed.size();
  cout << endl;
  return 0;
}
