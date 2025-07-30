const object1 = { nome: "Maria", idade: 30 };

const object2 = { ...object1 };

object2.idade = 35;

console.log(object1);
console.log(object2);