try {
  const randomNumber = () => {
    try {
      return Math.floor(Math.random() * 101);
    } catch (error) {
      console.error('Error generating random number:', error);
      return 0;
    }
  };

  console.log(randomNumber());
  console.log(randomNumber());
} catch (error) {
  console.error('Error in main execution:', error);
}