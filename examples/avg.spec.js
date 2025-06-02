import { avg } from "./avg";

describe("Función average", () => {
  it("Para un array formado por 1, 1, 1. El resultado debe ser 1", () => {
    expect(avg([1, 1, 1])).toBe(1);
  });

  it("Para un array de elementos positivos, la media debe ser positiva", () => {
    for (let i = 0; i++; i < 3) {
      const a = Math.random();
      const b = Math.random();
      const c = Math.random();
      expect(avg([a, b, c])).toBeGreaterThanOrEqual(0);
    }
  });

  it("Para un array de elementos negativos, la media debe ser negativa", () => {
    for (let i = 0; i++; i < 3) {
      const a = Math.random() * -1;
      const b = Math.random() * -1;
      const c = Math.random() * -1;
      expect(avg([a, b, c])).toBeLessThanOrEqual(0);
    }
  });

  it("Para un array vacio, el resultado sea NaN", () => {
    expect(avg([])).toBeNaN();
  });
});
