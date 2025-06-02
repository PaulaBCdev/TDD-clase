const suma = require("./sum");

test("sumar 1 + 2 es igual a 3", () => {
  expect(suma(1, 2)).toBe(3);
});

// 0 + 0 = 0
test.todo("Sumar 0 + 0 es igual a 0");

// 0 + 1 = 1
test.todo("Sumar 0 + 1 es igual a 1");

// 1 + -3 = -2
test.todo("Sumar 1 + -3 es igual a -2");
