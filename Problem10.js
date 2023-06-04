function pigIt(str) {
    let list = str.split(' ').map((word) => {
      const punctuation = /[.,!?'"]/g.test(word);
      let newWord = word.replace(/[.,!?'"]/g, '');
  
      if (!punctuation) {
        newWord = newWord.substr(1) + newWord[0] + 'ay';
      }
  
      if (punctuation) {
        newWord = newWord + word[word.length - 1];
      }
  
      return newWord;
    });
  
    return list.join(' ');
  }
  
  console.log(pigIt('Hello World !'));
  