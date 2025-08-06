try {
  const add = (a, b) => {
    try {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both parameters must be numbers');
      }
      return a + b;
    } catch (error) {
      console.error('Error in add function:', error);
      return null;
    }
  };

  console.log(add(6, 2));
  console.log(add(20, 14));
} catch (error) {
  console.error('Error in main execution:', error);
}