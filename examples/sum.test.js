/* const suma = require("./sum"); */
import suma from "./sum.js";

test("sumar 1 + 2 es igual a 3", () => {
  expect(suma(1, 2)).toBe(3);
});

// 0 + 0 = 0
test("Sumar 0 + 0 es igual a 0", () => {
  expect(suma(0, 0)).toBe(0);
});

// 0 + 1 = 1
test("Sumar 0 + 1 es igual a 1", () => {
  expect(suma(0, 1)).toBe(1);
});

// 1 + -3 = -2
test("Sumar 1 + -3 es igual a -2", () => {
  expect(suma(1, -3)).toBe(-2);
});
