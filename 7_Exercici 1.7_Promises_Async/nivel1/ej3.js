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