try {
  myPromise.then(result => {
    console.log(result);
  }).catch(error => {
    console.error('Error in promise:', error);
  });
} catch (error) {
  console.error('Error handling promise:', error);
}