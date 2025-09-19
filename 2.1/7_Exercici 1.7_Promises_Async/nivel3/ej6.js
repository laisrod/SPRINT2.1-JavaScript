const promessa1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promessa 1 resolvida após 2 segundos');
  }, 2000);
});

const promessa2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promessa 2 resolvida após 3 segundos');
  }, 3000);
});

Promise.all([promessa1, promessa2])
  .then(resultados => {
    console.log('Resultados do Promise.all:', resultados);
  })
  .catch(erro => {
    console.log('Erro em alguma promessa:', erro);
  });