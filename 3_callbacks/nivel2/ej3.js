function waitISaludar(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 2000);
}

//função anonima
waitISaludar("Ana", function(name) {
  console.log(`Hi, ${name}!`);
});

// arrow function
waitISaludar("Julia", nome => {
  console.log(`Oi, ${nome}!`);
});

//console
waitISaludar("Paula", console.log);

//função ja definida
function mostrarSaudacao(nome) {
  alert("Saudação para: " + nome);
}

waitISaludar("Lucas", mostrarSaudacao);