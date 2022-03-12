
const sum = function(fromN, toN) {
  // fromN is always < toN

  // base case is when fromN === toN

  if (fromN === toN) {
    return fromN;
  }

  return fromN + sum(fromN + 1, toN);

};

module.exports = sum;

console.log(sum(3, 10));
