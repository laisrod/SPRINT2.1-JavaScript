const mensagemAtrasada = () => {
  setTimeout(() => {
    console.log("Mensagem exibida após 3 segundos!");
  }, 3000);
};

mensagemAtrasada();