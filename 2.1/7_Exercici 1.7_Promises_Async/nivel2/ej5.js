const minhaPromessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Olá, mundo');
  }, 2000);
});

async function executarPromessa() {
  try {
    const resultado = await minhaPromessa;
    console.log(resultado);
  } catch (erro) {
    console.log('Erro ao executar a promessa:', erro);
  }
}

executarPromessa();