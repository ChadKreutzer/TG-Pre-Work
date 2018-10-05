const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale',
'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number / 100);

/* I'm assuming they are going to have us do chaining soon. (cause I would have
just tacked the join() on after the map) */