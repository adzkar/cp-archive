#include <iostream>
using namespace std;
typedef unsigned int ui;

int main() {
  unsigned int T;cin >> T;
  for(unsigned int i = 0;i < T;i++) {
    unsigned long int x;cin >> x;
    cout << ((x%2==0) ? ((x/2)*(x/2)):((x/2)*((x/2)+1))) << endl;
  }
  return 0;
}
