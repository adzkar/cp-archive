#include <iostream>

using namespace std;

int main() {

	int n;
	double a,b;

	scanf("%i %lf %lf", &n, &a, &b);

	printf("NUMBER = %i\n", n);
	printf("SALARY = U$ %.2lf\n", a*b);

	return 0;
}