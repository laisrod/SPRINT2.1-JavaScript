try {
  const object1 = { name: "Maria", age: 30 };

  const object2 = { ...object1 };

  object2.age = 35;

  console.log(object1);
  console.log(object2);
} catch (error) {
  console.error('Error spreading objects:', error);
}