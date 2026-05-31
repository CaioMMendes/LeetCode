


class Solution {
public:
    bool asteroidsDestroyed(int mass, vector<int>& asteroids) {

        std::sort(asteroids.begin(), asteroids.end());
        long current=mass;

        for (int asteroid : asteroids) {
            if(current<asteroid)return false;
            current+=asteroid;
            
        }

        return true;
    }
};