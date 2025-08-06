try {
  const numbers = [13, 7, 8, 21];
  const sum = numbers.reduce((accumulator, currentValue) => {
    try {
      return accumulator + currentValue;
    } catch (error) {
      console.error('Error reducing numbers:', error);
      return accumulator;
    }
  }, 0);
  console.log(sum);
} catch (error) {
  console.error('Error in reduce operation:', error);
}