try {
  const numbers = [1, 10, 8, 11];
  const greaterThanTen = numbers.find(num => {
    try {
      return num > 10;
    } catch (error) {
      console.error('Error finding number:', num, error);
      return false;
    }
  });
  console.log(greaterThanTen);
} catch (error) {
  console.error('Error in find operation:', error);
}