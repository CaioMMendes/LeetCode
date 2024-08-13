const s = "(())";
// const s ="()[]{}"
// "{[]}"

const isValid = function (s: string) {
  if (s.length === 1) {
    return false;
  }

  const current = [];

  const open = "([{";
  const close = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (open.includes(element)) {
      current.push(element);
    } else {
      if (close[current[current.length - 1]] === element) {
        current.pop();
      } else {
        return false;
      }
    }
  }

  return current.length === 0;
};

console.log(isValid(s));
