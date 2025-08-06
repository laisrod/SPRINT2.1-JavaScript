try {
  function evenOdd(array) {
    try {
      if (!Array.isArray(array)) {
        throw new Error('Parameter must be an array');
      }

      for (let i = 0; i < array.length; i++) {
        try {
          if (typeof array[i] !== 'number') {
            console.warn(`Skipping non-numeric value at index ${i}:`, array[i]);
            continue;
          }
          const result = array[i] % 2 === 0 ? "even" : "odd";
          console.log(`${array[i]} is ${result}`);
        } catch (error) {
          console.error(`Error processing element at index ${i}:`, array[i], error);
        }
      }
    } catch (error) {
      console.error('Error in evenOdd function:', error);
    }
  }

  evenOdd([1, 2, 3, 4, 5]);
} catch (error) {
  console.error('Error in main execution:', error);
}