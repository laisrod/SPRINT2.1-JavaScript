try {
  const largestNumber = (num1, num2) => {
    try {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both parameters must be numbers');
      }
      return num1 > num2 ? 'Number 1 is bigger' : 'Number 2 is bigger';
    } catch (error) {
      console.error('Error in largestNumber function:', error);
      return 'Invalid comparison';
    }
  };

  console.log(largestNumber(10, 5));
  console.log(largestNumber(3, 8));
} catch (error) {
  console.error('Error in main execution:', error);
}