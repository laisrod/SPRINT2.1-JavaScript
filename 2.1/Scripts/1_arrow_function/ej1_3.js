try {
  class Person {
    constructor(name) {
      try {
        if (!name || typeof name !== 'string') {
          throw new Error('Name must be a valid string');
        }
        this.name = name;
      } catch (error) {
        console.error('Error in Person constructor:', error);
        this.name = 'Unknown';
      }
    }

    greeting = () => {
      try {
        console.log(`Hello, ${this.name}`);
      } catch (error) {
        console.error('Error in greeting method:', error);
      }
    }
  }

  const person1 = new Person('Anna');
  person1.greeting();

  const person2 = new Person('Clara');
  person2.greeting();

  const person3 = new Person('John');
  person3.greeting();
} catch (error) {
  console.error('Error in main execution:', error);
}