try {
  const fruits = ['apple', 'banana', 'orange', 'strawberry', 'kiwi', 'mango', 'pineapple'];

  const [firstFruit, secondFruit, ...remainingFruits] = fruits;

  console.log('First fruit:', firstFruit);
  console.log('Second fruit:', secondFruit);
  console.log('Remaining fruits:', remainingFruits);
} catch (error) {
  console.error('Error destructuring fruits:', error);
}