var isValid = function(s) {
    const stack = [];
    const openBrackets = { '(' : ')', '{' : '}', '[' : ']' };
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (openBrackets[char]) {
        stack.push(char);
      } else {
        if (openBrackets[stack.pop()] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
}
  

console.log(isValid("[(])"))