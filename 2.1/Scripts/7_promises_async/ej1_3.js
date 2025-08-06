try {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world');
    }, 2000);
  });

  function promessaComEntrada(entrada) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          if (entrada === 'Hello') {
            resolve('Correct entry!');
          } else {
            reject('Incorrect entry!');
          }
        }, 2000);
      } catch (error) {
        reject('Error in promise execution: ' + error);
      }
    });
  }
  
  console.log('Promise functions created successfully');
} catch (error) {
  console.error('Error creating promise functions:', error);
}