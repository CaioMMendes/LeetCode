class Solution {
public:
    bool isMiddleElementUnique(vector<int>& nums) {
        
        int middleIndex=std::floor(std::size(nums)/2);

        for(int i=0;i<nums.size();i++){
            if(i==middleIndex)continue;
            if(nums[i]==nums[middleIndex])return false;
        }


        return true;
    }
};