const numeros = [10, 20, 30, 40, 50];

const [primeiro, segundo, ...resto] = numeros;

console.log(primeiro);
console.log(segundo);
console.log(resto);


const config = {
  host: 'localhost',
  port: 8080,
  user: 'admin',
  password: '1234',
  database: 'meu_banco',
  timeout: 3000
};

const { host, port, ...outrasConfigs } = config;

console.log(host);
console.log(port);
console.log(outrasConfigs);

const pessoa = {
  nome: 'João',
  idade: 25,
  cidade: 'São Paulo',
  profissao: 'Engenheiro'
};

const { nome, ...dadosRestantes } = pessoa;

console.log(nome);
console.log(dadosRestantes);
