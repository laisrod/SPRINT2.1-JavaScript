const minhaPromessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Olá, mundo');
  }, 2000);
});

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
async function executarPromessa() {
  const resultado = await minhaPromessa;
  console.log(resultado);
}
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