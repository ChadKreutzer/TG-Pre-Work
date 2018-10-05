const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => word.length < 6));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5);


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => word.length > 5));

/* I still like them pointing you to MDN. Although I don't like using {} with
single line arrow functions--or () around single parameters with arrow functions.
(Not to say I won't do whatever the style guide at my place of work says to do.
;) )