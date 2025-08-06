try {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [firstNumber, secondNumber, ...remainingNumbers] = numbers;

  console.log('First number:', firstNumber);
  console.log('Second number:', secondNumber);
  console.log('Remaining numbers:', remainingNumbers);
} catch (error) {
  console.error('Error destructuring array:', error);
}