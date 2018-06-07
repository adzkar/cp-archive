#include <iostream>

using namespace std;

int main() {

  unsigned int n,k, e = 100;
  cin >> n >> k;
  unsigned int c[n];
  for(int i = 0;i < n;i++) cin >> c[i];
  
  for(int i = 0;i < n;i++) {
    if((i + k) % k == 0){
      e--;
      if(c[i] == 1) e-=2;
    }
  }

  cout << e << endl;

  cout << endl;

  return 0;
}
