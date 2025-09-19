function sum(...numeros) {
  return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(5, 10, 15, 20));