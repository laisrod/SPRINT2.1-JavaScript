const array = [11, 12, 13, 14];

const todosMaioresQue10 = array.every(num => num > 10);
const algunosMaioresQue10 = array.some(num => num > 10);

console.log("Todos maiores que 10:", todosMaioresQue10);
console.log("Algunos maiores que 10:", algunosMaioresQue10);