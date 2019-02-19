#include <iostream>

using namespace std;

int main()
{
	int a, b;
	double c, ans;

	scanf("%d %d %lf", &a, &b, &c);
	ans = b * c;
	scanf("%d %d %lf", &a, &b, &c);
	ans += b * c;
	printf("VALOR A PAGAR: R$ %.2lf\n", ans);

	return 0;
}