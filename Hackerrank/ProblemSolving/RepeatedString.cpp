#include <iostream>
#include <stdio.h>
#include <string>

using namespace std;

int main() {
  string s;
  cin >> s;
  long long total = 0;
  for(int i = 0;i < s.size();i++) if(s[i] == 'a') total++;
  long n;
  cin >> n;
  total *= n / s.size();
  for(int i = 0;i < n % s.size();i++) if(s[i] == 'a') total++;
  cout << total << endl;

  return 0;
}
