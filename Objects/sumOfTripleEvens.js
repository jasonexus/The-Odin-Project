function isEven(num) {
  return num % 2 === 0;
}

function threeTimes(num) {
  return num * 3;
}

function sumOfTripledEvens(array) {
  let initialSum = 0;

  const evenNums = array.filter(isEven);
  const mappedArr = evenNums.map(threeTimes);
  const sumOfAll = mappedArr.reduce((total, currentItem) => {
    return total + currentItem;
  }, initialSum);
  console.log(sumOfAll);
}

sumOfTripledEvens([1, 2, 3, 4]);
