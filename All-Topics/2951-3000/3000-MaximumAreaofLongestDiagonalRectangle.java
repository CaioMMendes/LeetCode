

class Solution {
    public int areaOfMaxDiagonal(int[][] dimensions) {

      int rows=dimensions.length;
      double result=0;
      int resultArea=0;
      for(int i=0;i<rows;i++){
        int length=dimensions[i][0];
        int width=dimensions[i][1];
        int area=length*width;
        double diagonal=Math.pow(((length*length)+(width*width)),0.5);
        if(diagonal>result){
          result=diagonal;
          resultArea=area;
        }else if(diagonal==result && area>resultArea){
          result=diagonal;
          resultArea=area;
        }
      }

return resultArea;

    }
}