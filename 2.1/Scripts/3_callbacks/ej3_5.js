try {
  function processString(str, callback) {
    try {
      const upperCaseStr = str.toUpperCase();
      callback(upperCaseStr);
    } catch (error) {
      console.error('Error in processString:', error);
    }
  }

  processString("hello world", function(result) {
    console.log(result);
  });

  processString("javascript", result => console.log(result));
} catch (error) {
  console.error('Error in main execution:', error);
}