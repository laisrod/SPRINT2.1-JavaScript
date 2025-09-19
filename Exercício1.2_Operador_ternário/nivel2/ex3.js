const verificaNumero = (num) => 
  num > 0 ? "Positive" : 
  num < 0 ? "Negative" : 
  "Zero";

console.log(verificaNumero(5));
console.log(verificaNumero(-2));
console.log(verificaNumero(0));

const findMaxim = (a, b, c) => 
  a > b 
    ? (a > c ? a : c) 
    : (b > c ? b : c);

console.log(findMaxim(3, 7, 5));
console.log(findMaxim(10, 2, 8));
console.log(findMaxim(1, 4, 9));
