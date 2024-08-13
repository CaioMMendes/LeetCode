class Solution {
    public int countSeniors(String[] details) {
      int result=0;
      for (String a: details) {
  
        String age=a.substring(11,13);
        if(Integer.valueOf(age)>60){
          result++;
        }
}

        return result;
    }
}
