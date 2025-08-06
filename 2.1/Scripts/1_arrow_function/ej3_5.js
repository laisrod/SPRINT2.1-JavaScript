try {
  const delayedMessage = () => {
    try {
      setTimeout(() => {
        try {
          console.log("Message displayed after 3 seconds!");
        } catch (error) {
          console.error('Error in setTimeout callback:', error);
        }
      }, 3000);
    } catch (error) {
      console.error('Error setting up delayed message:', error);
    }
  };

  delayedMessage();
} catch (error) {
  console.error('Error in main execution:', error);
}