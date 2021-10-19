import { ceil } from 'sokk';

/**
 * Returns an array of all the multiples of a number that are within a range, including the start and end.
 *
 * Examples:
 * ```js
 * sliceRange(24, 3, 6) // []
 * sliceRange(4, 5, 20) // [8, 12, 16, 20]
 * ```
 */
const multiplesInRange = (n, start, end) => {
  const multiples = [];
  // Start with the first multiple after the start
  for (let multiple = ceil(start, n); multiple <= end; multiple += n) {
    multiples.push(multiple);
  }
  return multiples;
};

export default multiplesInRange;
