import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Solution {
  public String largestGoodInteger(String num) {
    String regex = "(\\d)\\1\\1";

    String result = "";

    Pattern pattern = Pattern.compile(regex);

    // Cria um objeto Matcher para a string de entrada
    Matcher matcher = pattern.matcher(num);

    // Itera sobre todas as ocorrências encontradas
    while (matcher.find()) {
      // Obtém o texto correspondente à ocorrência
      String match = matcher.group();

      Integer number = Integer.valueOf(match);
      Integer resultNumber = !result.equals("") ? Integer.valueOf(result) : 0;
      if (number >= resultNumber) {
        result = match;
      }

    }
    return result;
  }
}