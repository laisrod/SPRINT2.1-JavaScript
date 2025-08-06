try {
  const array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

  const sumResult = array
    .filter(num => {
      try {
        return num >= 10;
      } catch (error) {
        console.error('Error filtering number:', num, error);
        return false;
      }
    })
    .reduce((sum, num) => {
      try {
        return sum + (num * 2);
      } catch (error) {
        console.error('Error reducing number:', num, error);
        return sum;
      }
    }, 0);

  console.log("Result:", sumResult);
} catch (error) {
  console.error('Error in chained operations:', error);
}