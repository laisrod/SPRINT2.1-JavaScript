function processElements(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

processElements([1, 2, 3, 4], function(elemento) {
  console.log("Elemento:", elemento);
});

processElements(['a', 'b', 'c'], elemento => console.log("Letra:", elemento));