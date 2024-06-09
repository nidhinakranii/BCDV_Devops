// calculator.test.js

const { add, subtract, multiply } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 4 - 2 to equal 2', () => {
  expect(subtract(4, 2)).toBe(2);
});

test('multiplies 3 * 5 to equal 15', () => {
  expect(multiply(3, 5)).toBe(15);
});
