const numeros = [11, 12, 13, 14];

const todosMaioresQue10 = numeros.every(num => num > 10);
const algumMaiorQue10 = numeros.some(num => num > 10);

console.log(todosMaioresQue10);
console.log(algumMaiorQue10);