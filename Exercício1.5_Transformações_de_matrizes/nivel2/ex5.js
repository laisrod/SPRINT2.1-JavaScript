const processarArray = arr => arr.filter(n => n >= 10).map(n => n * 2).reduce((a, b) => a + b, 0);

const resultado = processarArray([1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]);
console.log(resultado);