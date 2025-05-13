class Solution {
    public double calculateTax(int[][] brackets, int income) {
      double result=0;

      for(int i=0;i<brackets.length;i++){
       
        if(i==0){
          result+=(Math.min(brackets[i][0],income)*((double)brackets[i][1]/100));
          continue;
        }
         if(brackets[i-1][0]>=income){
          break;
         }
          result+=(Math.min(brackets[i][0],income)-brackets[i-1][0])*((double)brackets[i][1]/100);

      }
return result;
    }
}