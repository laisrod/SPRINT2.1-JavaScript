try {
  const promise1 = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve('Promise 1 resolved after 2 seconds');
      }, 2000);
    } catch (error) {
      reject('Error in promise 1:', error);
    }
  });

  const promise2 = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve('Promise 2 resolved after 3 seconds');
      }, 3000);
    } catch (error) {
      reject('Error in promise 2:', error);
    }
  });

  Promise.all([promise1, promise2])
    .then(results => {
      console.log('Promise.all results:', results);
    })
    .catch(error => {
      console.error('Error in some promise:', error);
    });
} catch (error) {
  console.error('Error in main execution:', error);
}