try {
  function sum(...numbers) {
    try {
      return numbers.reduce((accumulator, current) => accumulator + current, 0);
    } catch (error) {
      console.error('Error in sum function:', error);
      return 0;
    }
  }

  console.log(sum(1, 2, 3));
  console.log(sum(5, 10, 15, 20));
} catch (error) {
  console.error('Error in main execution:', error);
}