#include <iostream>
using namespace std;

int sumAll(int x) {
  int total = 0;
  while(x > 0) {
    total += x%10;
    x /= 10;
  }
  return total;
}

int main(int argc, char const *argv[]) {
  unsigned int n, ans, sum = 0, max = 0;cin >> n;
  for(int i = 1;i <= n;i++)
    if(n%i == 0) {
      if(sumAll(i) > sumAll(max)) {
        ans = i;
        max = i;
      } else if(sumAll(i) == sumAll(max) && i < max) ans = i;
    }
  cout << ans << endl;
  return 0;
}
