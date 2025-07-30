const array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

array.filter(num => num >= 10)
filtrados.map(num => num * 2)
multiplicados.reduce((acc, num) => acc + num, 0)


const resultadoSoma = array.filter(num => num >= 10).reduce((soma, num) => soma + (num * 2), 0);

console.log("Resultado:", resultadoSoma);

