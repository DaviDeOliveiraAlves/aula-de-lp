let numbers = [1, 2, 3, 4, 5];

async function numerosDobrados(numbers) {
  let promises = numbers.map(async function (element) {
    return element * 2;
  });

  let doubledNumbers = await Promise.all(promises);

  return [...numbers, ...doubledNumbers];
}

numerosDobrados(numbers).then((newNumbers) => {
  console.log(newNumbers);
});
