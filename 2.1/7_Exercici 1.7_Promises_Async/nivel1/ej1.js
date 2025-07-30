const minhaPromessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Olá, mundo');
  }, 2000);
});