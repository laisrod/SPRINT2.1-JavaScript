try {
  const array = [11, 12, 13, 14];

  const allGreaterThan10 = array.every(num => {
    try {
      return num > 10;
    } catch (error) {
      console.error('Error checking number in every:', num, error);
      return false;
    }
  });

  const someGreaterThan10 = array.some(num => {
    try {
      return num > 10;
    } catch (error) {
      console.error('Error checking number in some:', num, error);
      return false;
    }
  });

  console.log("All greater than 10:", allGreaterThan10);
  console.log("Some greater than 10:", someGreaterThan10);
} catch (error) {
  console.error('Error in every/some operations:', error);
}