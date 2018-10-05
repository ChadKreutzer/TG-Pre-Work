var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = 'You can make carbonara with ' + pasta + ', ' + meat + ', ' +
'and a sauce made with' + sauce + '.';

/* Yup. I prefer es6 for sure. I mean var isn't necessarily bad, but it doesn't
provide the security of const, and the functional scope can make for some more
interesting side effects (I know some programmers do tricks which make use of
that, but it isn't really necessary). but template strings are way better than
using the + in almost every way.

As an aside, I do think it is kinda funny that C# is going to using var. */