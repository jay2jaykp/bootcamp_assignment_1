const sum = require("./math");

test("to check if my function squaredValue will return 11 when the input is 5", () => {
  expect(sum.squaredValue(5)).toBe(11);
});
test("to check if my function squaredValue will return 12 when the input is 6", () => {
  expect(sum.squaredValue(6)).toBe(12);
});
test("to check if my function squaredValue will return 14 when the input is 8", () => {
  expect(sum.squaredValue(8)).toBe(14);
});
test("to check if my function squaredValue will return 16 when the input is 10", () => {
  expect(sum.squaredValue(10)).toBe(16);
});
