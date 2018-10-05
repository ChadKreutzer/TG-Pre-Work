const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey',
'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => animal === 'elephant');

const startsWithS = animals.findIndex(animal => animal.startsWith('s'));

/* Sure, I could have just used bracket notation: (animal[0] === 's') but I
wanted to play around a bit. */