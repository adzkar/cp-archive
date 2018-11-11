#include <iostream>
using namespace std;
int main() {
  uint32_t base, area;
  cin >> base >> area;
  cout << area*2/base + bool((2*area) % base) << endl;
  return 0;
}
