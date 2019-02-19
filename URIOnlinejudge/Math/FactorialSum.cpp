#include <iostream>
using namespace std;
typedef long long ul;

ul fact(ul n) {
	if(n == 0 || n == 1)
		return 1;
	return n*fact(n-1);
}

int main() {

	ul a,b, ans;
	cin >> a >> b;

	ans = fact(a) + fact(b);

	cout << ans << endl;

	return 0;
}