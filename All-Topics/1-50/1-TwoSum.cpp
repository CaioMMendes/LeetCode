


class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::map<int,int> map;


        for(int i=0;i<nums.size();i++){

            int find=target-nums[i];

            if(map.count(find)){
                return {i,map[find]};
            }

            map[nums[i]]=i;


        }

        return {};
    }
};