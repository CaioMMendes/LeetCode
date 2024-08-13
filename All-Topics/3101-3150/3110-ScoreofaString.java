class ScoreofaString {
    public int scoreOfString(String s) {
        
int result=0;
for (int i = 1; i < s.length(); i++) {
result+=Math.abs(Character.codePointAt(s, i)-Character.codePointAt(s, i-1));
}

return result;
    }
}