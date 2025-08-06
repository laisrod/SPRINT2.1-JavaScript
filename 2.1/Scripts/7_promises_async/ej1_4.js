try {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world');
    }, 2000);
  });

  function promiseWithInput(input) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          if (input === 'Hello') {
            resolve('Correct input!');
          } else {
            reject('Incorrect input!');
          }
        }, 2000);
      } catch (error) {
        reject('Error in promise execution: ' + error);
      }
    });
  }

  async function executePromise() {
    try {
      const result = await myPromise;
      console.log(result);
    } catch (error) {
      console.error('Error executing promise:', error);
    }
  }
  
  executePromise();

  async function testInput(input) {
    try {
      const result = await promiseWithInput(input);
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  testInput('Hello');
  testInput('Hi');
  
} catch (error) {
  console.error('Error in main execution:', error);
}