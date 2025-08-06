try {
  const person = {
    name: 'Maria',
    age: 20,
    city: 'Barcelona',
    email: 'maria@email.com'
  };

  const job = {
    company: 'TechCorp',
    position: 'Developer',
    salary: 20000,
    department: 'IT',
    experience: '1 year'
  };

  const completeEmployee = { ...person, ...job };

  console.log('Complete employee:', completeEmployee);
} catch (error) {
  console.error('Error merging objects:', error);
}