function process(numero, callback) {
  callback(numero);
}

process(5, function(n) {
  console.log("The number is:", n);
});


process(10, n => console.log("Double:", n * 2));