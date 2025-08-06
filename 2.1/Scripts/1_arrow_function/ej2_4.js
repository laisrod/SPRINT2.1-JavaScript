try {
  function printNumbers(numbers) {
    try {
      if (!Array.isArray(numbers)) {
        throw new Error('Parameter must be an array');
      }

      for (let i = 0; i < numbers.length; i++) {
        try {
          (() => {
            console.log(numbers[i]);
          })();
        } catch (error) {
          console.error('Error printing number at index:', i, 'Value:', numbers[i], error);
        }
      }
    } catch (error) {
      console.error('Error in printNumbers function:', error);
    }
  }

  printNumbers([1, 2, 3, 4, 5]);
} catch (error) {
  console.error('Error in main execution:', error);
}
