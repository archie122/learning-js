function sortArray(array) {
    let x = [];
    let updatedArray = array.map((element) => {
      if (element % 2 !== 0) {
        x.push(element);
        return '-';
      }
      return element;
    });
  
    x.sort((a, b) => a - b);

    updatedArray = updatedArray.map((element) => {
      if (element === '-') {
        return x.shift();
      }
      return element;
    });
  
    return updatedArray;
  }
  

console.log(sortArray([11, 1, 2, 8, 3, 4, 5]))