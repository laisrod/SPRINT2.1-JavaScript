function verificaEntrada(entrada) {
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

verificaEntrada('Olá')
  .then(resultado => console.log(resultado))
  .catch(erro => console.log(erro));
