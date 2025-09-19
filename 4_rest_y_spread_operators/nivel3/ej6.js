const obj1 = { nome: "Fran", idade: 29 };
const obj2 = { cidade: "São Paulo", profissao: "Engenheiro" };

const objMesclado = { ...obj1, ...obj2 };

console.log(objMesclado);

const endereco = { rua: "Avenida Brasil", numero: 100 };
const contato = { telefone: "1234-5678", email: "joao@email.com" };

const dadosCompletos = { ...obj1, ...endereco, ...contato };

console.log(dadosCompletos);