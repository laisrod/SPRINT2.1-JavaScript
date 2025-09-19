function printNumbers(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    (() => {
      console.log(numeros[i]);
    })();
  }
}

printNumbers([1, 2, 3, 4, 5]);
