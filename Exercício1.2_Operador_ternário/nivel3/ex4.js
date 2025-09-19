function evenOdd(array) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array[i] % 2 === 0 ? "par" : "ímpar";
    console.log(`${array[i]} é ${resultado}`);
  }
}

evenOdd([1, 2, 3, 4, 5]);