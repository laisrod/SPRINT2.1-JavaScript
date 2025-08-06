try {
  let numbers = [1, 2, 3, 4, 5, 6];

  if (!Array.isArray(numbers)) {
    throw new Error('numbers is not an array');
  }

  let evenNumbers = numbers.filter(num => {
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