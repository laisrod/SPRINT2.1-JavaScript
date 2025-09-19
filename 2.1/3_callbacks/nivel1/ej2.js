function calculadora(num1, num2, callback) {
  return callback(num1, num2);
}

const resultado = calculadora(4, 7, (a, b) => a + b);
console.log(resultado);