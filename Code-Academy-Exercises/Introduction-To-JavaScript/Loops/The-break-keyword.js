const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let rapperArrayIndex = 0; rapperArrayIndex < rapperArray.length; rapperArrayIndex++) {  
  console.log(rapperArray[rapperArrayIndex]);
  if (rapperArray[rapperArrayIndex] === 'Notorious B.I.G.') break;
}
console.log("And if you don't know, now you know.");

/* Maybe I'm old, but I don't get the rap reference. I do find it funny that
they finally get around to mentioning that you can use double quotes instead
of escaping the apostrophes. */