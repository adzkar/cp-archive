#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

int main() {
	int t;
    cin>>t;  
  	while (t--){
      int A,B;
      cin>>A;
      cin>>B;
      A--;
      cout<<(int(sqrt(B)))-(int)sqrt(A)<<endl;
    }
    return 0;
}