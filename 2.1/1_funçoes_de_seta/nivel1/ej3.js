class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  saudacao = () => {
    console.log(`Hola, ${this.nome}`);
  }
}

const pessoa1 = new Pessoa('Ana');
pessoa1.saudacao();

const pessoa2 = new Pessoa('Clara');
pessoa2.saudacao();

const pessoa3 = new Pessoa('Pedro');
pessoa3.saudacao();