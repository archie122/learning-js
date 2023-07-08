function gap(g, m, n) {
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let prevPrime = 0;
    for (let i = m; i <= n; i++) {
      if (isPrime(i)) {
        if (i - prevPrime === g) return [prevPrime, i];
        prevPrime = i;
      }
    }
    return null;
  }
  
  console.log(gap(8, 300, 400));  // Output: [101, 103]
  