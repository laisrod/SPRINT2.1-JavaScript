try {
  const numbers = [1, 2, 3, 4];
  const squares = numbers.map(num => {
    try {
      return num * num;
    } catch (error) {
      console.error('Error processing number:', num, error);
      return 0;
    }
  });

  console.log(squares);
} catch (error) {
  console.error('Error in map operation:', error);
}