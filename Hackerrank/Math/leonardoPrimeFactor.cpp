#include <bits/stdc++.h>
using namespace std;

bool isPrime(int x) {
  if(x <= 1) return false;
  for(int i = 2;i < x; i++)
      if(x % i == 0) {
        return false;
        break;
      }
        // break;

  return true;
}

int main() {
  int n; cin >> n;
  for(int i =0;i < n;i++) {
    unsigned long long int x;cin >> x;
    if(x <= 1) cout << 0 << endl;
    else if(x == 2) cout << 1 << endl;
    else {
      vector<int> primeNumbers;
      unsigned long long int a = 1;
      for(int i = 2;i < x;i++) {
        if(isPrime(i) && a*i <= x) {
          // cout << "The Prime Number: " << i << endl;
          a = a*i;
          // cout << "A Value's: " << a << endl;
          primeNumbers.push_back(i);
        }
        if(isPrime(i) && a*i > x) break;
      }
      cout << primeNumbers.size() << endl;
      while(!primeNumbers.empty()) primeNumbers.pop_back();
    }
  }
  return 0;
}
