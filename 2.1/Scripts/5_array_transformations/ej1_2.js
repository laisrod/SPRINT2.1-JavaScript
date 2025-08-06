try {
  const numbers = [1, 2, 3, 4];
  const evenNumbers = numbers.filter(num => {
    try {
      return num % 2 === 0;
    } catch (error) {
      console.error('Error filtering number:', num, error);
      return false;
    }
  });
  console.log(evenNumbers);
} catch (error) {
  console.error('Error in filter operation:', error);
}