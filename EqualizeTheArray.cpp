#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main() {
  int n,x;
  cin >> n;
  vector<int> arr(101);
  for(int i = 0;i < n;i++) {
    cin >> x;
    arr[x]++;
  }
  sort(arr.begin(), arr.end());
  cout << n - arr.back();
  cout << endl;
  return 0;
}
