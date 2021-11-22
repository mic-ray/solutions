/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      if (isBadVersion(left)) return left;

      let middle = Math.floor((left + right) / 2);

      if (right - left <= 2) return isBadVersion(middle) ? middle : right;

      if (isBadVersion(middle)) right = middle;
      else left = middle;
    }
  };
};
