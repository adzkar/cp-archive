#include <iostream>
#include <string>

using namespace std;

int main() {

  unsigned int n,x;
  cin >> n;
  for(int i = 0;i < n;i++) {
    cin >> x;
    string a = to_string(x);
    // char tmp = a[0];
    int b = atoi(a[0]);
    cout << b << endl;
  }


  return 0;
}
