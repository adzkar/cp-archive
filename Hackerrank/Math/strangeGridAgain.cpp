#include <bits/stdc++.h>
using namespace std;
typedef unsigned long long int ullt;

int main(int argc, char const *argv[]) {
  ullt c,r;
  cin >> c >> r;
  cout << ((ullt)ceil((long double)c/(long double)2)-1)*10+(r*2)-((c%2==0)?1:2) << endl;
  return 0;
}
