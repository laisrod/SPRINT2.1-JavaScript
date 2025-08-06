try {
  function processElements(array, callback) {
    try {
      for (let i = 0; i < array.length; i++) {
        try {
          callback(array[i]);
        } catch (error) {
          console.error('Error processing element:', array[i], error);
        }
      }
    } catch (error) {
      console.error('Error in processElements:', error);
    }
  }

  processElements([1, 2, 3, 4], function(element) {
    console.log("Element:", element);
  });

  processElements(['a', 'b', 'c'], element => console.log("Letter:", element));
} catch (error) {
  console.error('Error in main execution:', error);
}