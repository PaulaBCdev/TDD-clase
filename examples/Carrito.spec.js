import { Carrito } from "./Carrito.js";

describe("Testing de la clase Carrito", () => {
  const sushiItem = {
    price: 10,
    name: "sushiItem",
  };

  const waterItem = {
    price: 1.5,
    name: "waterItem",
  };

  let carrito;
  beforeEach(() => {
    carrito = new Carrito();
  });

  describe("Testing de getTotalItems", () => {
    it("Carrito debe tener una funcion llamada getTotalItems que devuelva 0 a la inicializacion del carrito", () => {
      /* const carrito = new Carrito(); */
      expect(carrito.getTotalItems()).toEqual(0);
    });

    it("Carrito.getTotalItems debe devolver 1 despues de añadir un elemento al carrito", () => {
      /* const carrito1 = new Carrito(); */
      /* carrito.addItem({ price: 1, name: "sushiItem " }); */
      carrito.addItem(sushiItem);
      expect(carrito.getTotalItems()).toEqual(1);
    });

    it("Carrito.getTotalItems debe devolver 21 despues de añadir dos elementos al carrito", () => {
      /* carrito.addItem({ price: 1, name: "sushiItem " });
      carrito.addItem({ price: 1, name: "sushiItem " }); */
      carrito.addItem(sushiItem);
      carrito.addItem(sushiItem);
      expect(carrito.getTotalItems()).toEqual(2);
    });

    describe("Gestion de errores", () => {
      it("Carrito.addItem debe devolver un error si se añade un item sin precio", () => {
        expect(() => carrito.addItem({ name: "sushiItem" })).toThrow();
      });

      it("Carrito.addItem debe devolver un error si se añade un item sin nombre", () => {
        expect(() => carrito.addItem({ price: 1 })).toThrow();
      });

      it("Carrito.addItem debe devolver un error diciendo 'Item must have price and name' si el item no contiene nombre o precio", () => {
        expect(() => carrito.addItem({ price: 1 })).toThrow(
          "Item must have price and name"
        );
        expect(() => carrito.addItem({ name: "sushiItem" })).toThrow(
          "Item must have price and name"
        );
      });

      it("Carrito.addItem debe devolver un error diciendo 'Item must be an object' si no es un objeto", () => {
        expect(() => carrito.addItem()).toThrow("Item must be an object");
      });
    });
  });

  describe("Testeando getTotalCheckout", () => {
    it("Carrito.getTotalCheckout debe devolver 10 despues de añadir 1 cuchiItem", () => {
      carrito.addItem(sushiItem);
      expect(carrito.getTotalCheckout()).toEqual(10);
    });

    it("Carrito.getTotalCheckout debe devolver 20 despues de añadir 2 sushiItem", () => {
      carrito.addItem(sushiItem);
      carrito.addItem(sushiItem);
      expect(carrito.getTotalCheckout()).toEqual(20);
    });

    it("Carrito.getTotalCheckout debe devolver 11,5 despues de añadir 1 sushiItem y 1 waterItem", () => {
      carrito.addItem(sushiItem);
      carrito.addItem(waterItem);
      expect(carrito.getTotalCheckout()).toEqual(11.5);
    });

    it("Debe devolver 0 si el carrito esta vacio", () => {
      expect(carrito.getTotalCheckout()).toEqual(0);
    });
  });

  describe("Testeando addItem (detail)", () => {});

  describe("Testeando removeItem", () => {});
});
