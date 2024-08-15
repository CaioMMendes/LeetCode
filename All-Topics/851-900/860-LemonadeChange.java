class Solution {
    public boolean lemonadeChange(int[] bills) {
        int countFive=0;
        int countTen=0;

        for(int i=0;i<bills.length;i++){
          if(bills[i]==5){
            countFive++;
            continue;
          }else           if(bills[i]==10){
            if(countFive<=0){
              return false;
            }
            countFive--;
            countTen++;
          }      else{
            if(countTen>=1 && countFive>=1){
              countFive--;
              countTen--;
            }else if(countFive>=3){
              countFive-=3;
            }else{
              return false;
            }
          }



        }
        return true;
    }
}