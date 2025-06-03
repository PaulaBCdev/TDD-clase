/* const suma = require("./sum"); */
import suma from "./sum.js";

describe("Funcion sum", () => {
  describe("Suma de valores positivos", () => {
    test("sumar 1 + 2 es igual a 3", () => {
      expect(suma(1, 2)).toBe(3);
    });
  });

  describe("Suma con 0", () => {
    // 0 + 0 = 0
    test("Sumar 0 + 0 es igual a 0", () => {
      expect(suma(0, 0)).toBe(0);
      expect(suma(0, 0)).toEqual(0);
    });

    // 0 + 1 = 1
    test("Sumar 0 + 1 es igual a 1", () => {
      expect(suma(0, 1)).toBe(1);
    });
  });

  describe("Suma de valores negativos", () => {
    // 1 + -3 = -2
    test("Sumar 1 + -3 es igual a -2", () => {
      expect(suma(1, -3)).toBe(-2);
    });

    // Valorar 3 combinaciones de numeros. Asegurar que el valor es NEGATIVO -1 -1 > NEGATIVO. -1 -4 NEGATIVO etc
    test("Sumar dos valores negativos es igual a un valor negativo", () => {
      expect(suma(-1, -1)).not.toBeGreaterThan(0);
      expect(suma(-1, -4)).toBeLessThan(0);
    });

    test("Sumar dos valores negativos cualesquiera es igual a un valor negativo", () => {
      for (let i = 0; i++; i < 3) {
        const a = Math.random() * -1;
        const b = Math.random() * -1;
        expect(suma(a, b)).toBeLessThanOrEqual(0);
        expect(suma(-2, -6)).toBeNegative();
      }
    });
  });

  describe("Suma con valores decimales", () => {
    test("Sumar 0.1 + 0.2 es 0.3", () => {
      expect(suma(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("Suma con valores no numericos", () => {
    test('sumar 1 y "a" debe devolver un error', () => {
      expect(() => suma(1, "a")).toThrow("Must be a number");
    });
  });
});
