// Write your code below
const bobsFollowers = ['Fred', 'Wilma', 'George', 'Larry'];
const tinasFollowers = ['Larry', 'Sally', 'Wilma'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);

/* It works, but boy howdy! O of n^2 is nasty. */

console.log(commonFollowers(bobsFollowers, tinasFollowers));

function commonFollowers(firstPerson, secondPerson) {
  let source, search;
  const output = [];

  if (firstPerson.length < secondPerson.length) {
    source = firstPerson;
    search = secondPerson.sort();
  } else {
    source = secondPerson;
    search = firstPerson.sort();
  }
  source.forEach(function (follower) {
    if (binarySearch(follower, search)) {
      output.push(follower);
    }
  });
  return output;
}

function binarySearch(target, arr) {
  if (target === arr[0]) return true;
  if (arr.length === 1) return false;

  const mid = Math.floor(arr.length / 2);
  const lower = arr.slice(0, mid);
  const upper = arr.slice(mid);

  return binarySearch(target, (target < upper[0]) ? lower : upper);
}

/* Sure, with the small amount of data, the nested loop is still a bit faster,
but with a lot more data, the nLog(n) will make a difference. And of course you
could use a different sort than the built in one to make it even faster. */