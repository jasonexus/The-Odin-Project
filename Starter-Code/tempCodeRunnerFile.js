function add7(a) {
  return a + 7;
}

function multiply(a, b) {
  return a * b;
}

function capitalize(string) {
  const makeString = string.toString().toLowerCase();
  let cap = makeString.toUpperCase().charAt(0);
  let newString = makeString.toString().replace(makeString.charAt(0), cap);
  return newString;
}

function lastLetter(string) {
  const word = string.toString();
  return word.charAt(word.length - 1);
}

function favoriteAnimal(animal) {
   return animal + " is my favorite animal!"
 }

 console.log(favoriteAnimal('Goat'))

let x = add7(5);

console.log(multiply(7, 8));
console.log(x);
console.log(capitalize("gygygyii"));
console.log(lastLetter("sdsfdsdfyyttm"));