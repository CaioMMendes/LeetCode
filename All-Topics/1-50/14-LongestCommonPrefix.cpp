#include <vector>
#include <string>
#include <limits>



class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        
        std::string result="";
        int size=1;
        int minLength=std::numeric_limits<int>::max();

        for(std::string val:strs){
            if(val.size()<minLength)minLength=val.size();
        }


        for(int i=0;i<minLength;i++){
            std::string part=strs[0].substr(0, size);
            for(std::string val:strs){
                std::string part2=val.substr(0, size);
                if(part!=part2){
                    return result;
                }
            }
            result+=strs[0][i];
            size++;
        }


        return result;







    }
};