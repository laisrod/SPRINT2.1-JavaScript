const obj1 = { nome: "João", idade: 25 };
const obj2 = { cidade: "São Paulo", profissao: "Engenheiro" };

const objMesclado = { ...obj1, ...obj2 };

console.log(objMesclado);
