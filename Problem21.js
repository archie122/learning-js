theatreSquare = (n, m, a) => {
    let compare = n * m;
    let square = a * a;
    let x = true;
  
    while (x) {
      if (compare < square) {
        x = false;
      } else {
        square = square * a * a;
      }
    }
  
    return Math.ceil(Math.sqrt(square) / a);
};
  

console.log(theatreSquare(2, 3, 4))