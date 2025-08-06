try {
  let names = ['Anna', 'Bernat', 'Clara'];

  names.forEach(function(name) {
    try {
      console.log(name);
    } catch (error) {
      console.error('Error processing name:', name, error);
    }
  });
} catch (error) {
  console.error('Error in forEach loop:', error);
}