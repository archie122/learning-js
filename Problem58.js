const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

class RomanNumerals {
    static toRoman(num) {
      return 'IV';
    }
  
    static fromRoman(str) {
      return 4;
    }
}

const r1 = RomanNumerals;
console.log(r1.toRoman(8)); // Output should be 'VIII'
console.log(r1.fromRoman('X')); // Output should be 10
