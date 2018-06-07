#include <iostream>

using namespace std;

int main() {

  unsigned int n;
  unsigned int p;

  cin >> n;
  cin >> p;

  int dariDepan = p/2, dariBelakang = (n/2)-(p/2), jawab = dariDepan;
  if(dariDepan < dariBelakang) jawab = dariDepan;
  else jawab = dariBelakang;

  cout << jawab << endl;

  return 0;
}
