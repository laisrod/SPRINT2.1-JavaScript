function processString(str, callback) {
  const strMaiuscula = str.toUpperCase();
  callback(strMaiuscula);
}

processString("olá mundo", function(resultado) {
  console.log(resultado);
});

processString("javascript", resultado => console.log(resultado));