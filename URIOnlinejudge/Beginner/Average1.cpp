#include <iostream>

using namespace std;

int main() {

	double a,b;
	scanf("%lf %lf", &a, &b);

	double ans = (a/11) * 3.5 + (b/11) * 7.5;

	printf("MEDIA = %.5lf\n", ans);

	return 0;
}