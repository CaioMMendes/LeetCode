


class Solution {
public:
    bool isPalindrome(int x) {

        if (x < 0) {
            return false;
        }

    
    st::string stringX = std::to_string(x);

    for(int i=0;i<stringX.size();i++){
        if(stringX[i]!=stringX[stringX.size()-i-1])return false;
    }

    return true;


    }
};