try {
  const names2 = ['Anna', 'Bernat', 'Clara'];

  if (!Array.isArray(names2)) {
    throw new Error('names2 is not an array');
  }

  for (let name of names2) {
    try {
      console.log(name);
    } catch (error) {
      console.error('Error processing name:', name, error);
    }
  }
} catch (error) {
  console.error('Error in for...of loop:', error);
}