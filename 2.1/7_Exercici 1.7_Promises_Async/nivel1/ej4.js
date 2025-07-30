//promessa simples
const minhaPromessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Olá, mundo');
  }, 2000);
});

// promessa com verificação de entrada
function promessaComEntrada(entrada) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (entrada === 'Olá') {
        resolve('Entrada correta!');
      } else {
        reject('Entrada incorreta!');
      }
    }, 2000);
  });
}
// Usando async/await para a primeira promessa
async function executarPromessa() {
  const resultado = await minhaPromessa;
  console.log(resultado);
}
//  a palavra-chave async antes de uma função, está dizendo:
// "Essa função será assíncrona, ou seja, ela sempre retorna uma Promise — mesmo que você não escreva new Promise dentro dela."
// toda função async retorna automaticamente uma Promise.

//await só pode ser usado dentro de uma função async.
// Ele serve para:
// Esperar o resultado de uma Promise antes de continuar a execução da função.
// Aguardar o resultado de uma Promise para poder usar o valor dela.
executarPromessa();


// Testando promessas com entrada e tratamento de erros
async function testarEntrada(entrada) {
  try {
    const resultado = await promessaComEntrada(entrada);
    console.log('Sucesso:', resultado);
  } catch (erro) {
    console.log('Erro:', erro);
  }
}

testarEntrada('Olá');
testarEntrada('Oi');