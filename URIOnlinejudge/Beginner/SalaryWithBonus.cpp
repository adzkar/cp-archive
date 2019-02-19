#include <iostream>

using namespace std;

int main() {

	double a,b;
	char name;

	scanf("%s %lf %lf", &name, &a, &b);

	printf("TOTAL = R$ %.2lf\n", a+b*.15);

	return 0;
}