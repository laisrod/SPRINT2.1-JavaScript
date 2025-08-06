try {
  function process(number, callback) {
    try {
      callback(number);
    } catch (error) {
      console.error('Error in callback:', error);
    }
  }

  process(5, function(n) {
    console.log("The number is:", n);
  });

  process(10, n => console.log("Double:", n * 2));
} catch (error) {
  console.error('Error in main execution:', error);
}