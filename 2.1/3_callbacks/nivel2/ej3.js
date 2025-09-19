function waitISaludar(nome, callback) {
  setTimeout(() => {
      callback(nome);
  }, 2000);
}

waitISaludar("João", (nome) => {
  console.log(`Olá, ${nome}!`);
});