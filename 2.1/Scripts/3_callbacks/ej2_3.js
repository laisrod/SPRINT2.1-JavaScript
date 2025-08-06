try {
  function waitISaludar(name, callback) {
    try {
      setTimeout(() => {
        try {
          callback(name);
        } catch (error) {
          console.error('Error in callback:', error);
        }
      }, 2000);
    } catch (error) {
      console.error('Error in setTimeout:', error);
    }
  }

  console.log("Starting exercise 3...");
  waitISaludar("Mary", (name) => {
    console.log(`Hello, ${name}!`);
  });
} catch (error) {
  console.error('Error in main execution:', error);
}