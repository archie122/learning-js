function sumStrings(a, b) {
    let x = a.split("").map(Number);
    let y = b.split("").map(Number);
  
    let sum = [];
    let carry = 0;
  
    // Ensure x and y have the same length by padding with leading zeros
    while (x.length < y.length) {
      x.unshift(0);
    }
    while (y.length < x.length) {
      y.unshift(0);
    }
  
    for (let i = x.length - 1; i >= 0; i--) {
      let digitSum = x[i] + y[i] + carry;
      sum.unshift(digitSum % 10);
      carry = Math.floor(digitSum / 10);
    }
  
    if (carry > 0) {
      sum.unshift(carry);
    }
  
    return sum.join("");
  }
  
  console.log(sumStrings('00103', '08567'));  // Output: 8670
  