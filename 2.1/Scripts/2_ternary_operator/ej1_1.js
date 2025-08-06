try {
  function canDrive(age) {
    try {
      if (typeof age !== 'number' || age < 0) {
        throw new Error('Age must be a positive number');
      }
      return age >= 18 ? "Can drive" : "Can not drive";
    } catch (error) {
      console.error('Error in canDrive function:', error);
      return "Invalid age";
    }
  }

  console.log(canDrive(33));
  console.log(canDrive(16));
} catch (error) {
  console.error('Error in main execution:', error);
}