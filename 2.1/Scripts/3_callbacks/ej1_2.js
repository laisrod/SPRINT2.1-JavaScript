try {
  function calculator(num1, num2, callback) {
    try {
      return callback(num1, num2);
    } catch (error) {
      console.error('Error in calculator:', error);
      return 0;
    }
  }

  const result = calculator(4, 7, (a, b) => a + b);
  console.log(result);
} catch (error) {
  console.error('Error in main execution:', error);
}