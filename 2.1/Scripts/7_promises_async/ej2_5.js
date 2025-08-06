try {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world');
    }, 2000);
  });

  async function executePromise() {
    try {
      const result = await myPromise;
      console.log(result);
    } catch (error) {
      console.error('Error executing the promise:', error);
    }
  }

  executePromise();
} catch (error) {
  console.error('Error in main execution:', error);
}