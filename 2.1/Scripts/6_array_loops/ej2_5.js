let numbers = [1, 2, 3, 4, 5, 6];

for (let num of numbers) {
  console.log(num);
  if (num === 5) {
    break;
  }
}