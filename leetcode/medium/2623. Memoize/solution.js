/**
 * @param {Function} fn
 */
function memoize(fn) {
  let cache = {};
  return function (...args) {
    if (args in cache) return cache[args];
    let res = fn(...args);
    cache[args] = res;
    return res;
  };
}
