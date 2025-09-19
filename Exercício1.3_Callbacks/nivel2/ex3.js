function waitISaludar(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 2000);
}


waitISaludar("Julia", nome => {
  console.log(`Oi, ${nome}!`);
});

waitISaludar("Paula", console.log);