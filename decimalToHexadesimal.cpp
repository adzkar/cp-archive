#include <iostream>
#include <string>

using namespace std;

string str2hex(int x){
  string str;
  do{
    if(x%16<10){
      str=(char)((x%16)+48)+str;
    }else{
      str=(char)((x%16)+87)+str;
    }
    x=x/16;
  }while(x>0);
  return str;
}

int main() {

    long n,a;
    char arr[100];
    cin >> n;
    int x[n];
    for(int i = 0;i < n;i++) {
        cin >> x[i];
    }
    for(int i = 0;i < n;i++) {
        int j = 0;
        cout << str2hex(x[i]) << endl;
    }

    cout << endl;

    return 0;
}