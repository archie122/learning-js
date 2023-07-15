function smash (words) {
    let x = ""
    
    for (let i = 0; i < words.length; i++) {
        x += words[i] + " ";
    }

    x = x.trim()
    
    
     return x
  };

console.log(smash(["hello", "world"]))