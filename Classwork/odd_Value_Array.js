const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const odds = [];

arr.forEach(number => {
  if (number % 2 !== 0) {
    odds.push(number);
  }
});

console.log(odds);