#include <iostream>

using namespace std;

int main()
{
	
	double a,b,c;

	scanf("%lf %lf %lf", &a, &b, &c);

	double ans = (a*2/10) + (b*3/10) + (c*5/10);

	printf("MEDIA = %.1lf\n", ans);

	return 0;
}