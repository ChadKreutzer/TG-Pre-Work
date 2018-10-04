const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice',
'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList.slice(1,4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

/* Fair enough. they did touch on shift() and unshift() but just in a grab bag
lesson of other methods. */