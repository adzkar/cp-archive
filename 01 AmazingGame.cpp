#include <iostream>
#include <string>
#include <cstring>

using namespace std;

int main() {

    int T;
    cin >> T;
    int poin[T];
    char kata[T][101];
    for(int i = 0;i < T;i++) {
        cin >> kata[i];
    }
    
    for(int i = 0;i < T-1;i++) {
        for(int j = 0;j < strlen(kata[i]);j++) {
            if(kata[i][j] == 'B') {
                kata[i][j] = 'A';
            } else if(kata[i][j] == 'A' && kata[i][j+1] == 'B') {
                kata[i][j] = 'B';
                kata[i][j+1] = 'A';
            }
        }
        cout << kata[i] << endl;
    }

    for(int i = 0;i < T-1;i++) {

    }

    cout << "Case #" << T << ": Semar" << endl;


    return 0;
}