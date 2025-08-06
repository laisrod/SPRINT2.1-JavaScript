try {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world');
    }, 2000);
  });
  
  console.log('Promise created successfully');
} catch (error) {
  console.error('Error creating promise:', error);
}