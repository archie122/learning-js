function rgb(r, g, b) {
    const toHex = (n) => {
      const hex = Math.max(0, Math.min(n, 255)).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return (toHex(r) + toHex(g) + toHex(b)).toUpperCase();
  }
  

console.log(rgb(167, 265, 187));