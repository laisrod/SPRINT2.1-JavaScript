try {
  const checkNumber = (num) => {
    try {
      if (typeof num !== 'number') {
        throw new Error('Parameter must be a number');
      }
      return num > 0 ? "Positive" : 
             num < 0 ? "Negative" : 
             "Zero";
    } catch (error) {
      console.error('Error in checkNumber function:', error);
      return "Invalid number";
    }
  };

  console.log(checkNumber(5));
  console.log(checkNumber(-2));
  console.log(checkNumber(0));

  const findMaximum = (a, b, c) => {
    try {
      if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error('All parameters must be numbers');
      }
      return a > b 
        ? (a > c ? a : c) 
        : (b > c ? b : c);
    } catch (error) {
      console.error('Error in findMaximum function:', error);
      return null;
    }
  };

  console.log(findMaximum(3, 7, 5));
  console.log(findMaximum(10, 2, 8));
  console.log(findMaximum(1, 4, 9));
} catch (error) {
  console.error('Error in main execution:', error);
}