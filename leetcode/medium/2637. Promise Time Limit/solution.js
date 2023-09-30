/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, rej) => {
      setTimeout(() => rej("Time Limit Exceeded"), t);
      fn(...args)
        .then((result) => res(result))
        .catch((err) => rej(err));
    });
  };
};

const example1 = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 50);

example1(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); // prints: Time Limit Exceeded

const example2 = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 150);

example2(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); // prints: 25

const example3 = timeLimit(async (a, b) => {
  await new Promise((res) => setTimeout(res, 120));
  return a + b;
}, 150);

example3(5, 10)
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); // prints: 15

const example4 = timeLimit(async () => {
  throw "Error";
}, 1000);

example4()
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); // prints: Error
