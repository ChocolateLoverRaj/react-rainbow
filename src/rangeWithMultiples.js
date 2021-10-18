import multiplesInRange from './multiplesInRange';
import last from 'last-element';

/**
 * Returns multiplesInRange but the array always starts with `start` and ends with `end`
 */
const rangeWithMultiples = (n, start, end) => {
  const multiples = multiplesInRange(n, start, end);
  if (multiples[0] !== start) multiples.unshift(start);
  if (last(multiples) !== end) multiples.push(end);
  return multiples;
};

export default rangeWithMultiples;
