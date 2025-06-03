export class Carrito {
  items = 0;

  //Aproximacion A
  totalCheckout = 0;

  getTotalItems() {
    return this.items;
  }

  addItem(item) {
    if (!(item instanceof Object)) {
      throw new Error("Item must be an object");
    }
    if (!item.price || !item.name) {
      throw new Error("Item must have price and name");
    }
    this.items++;
    this.totalCheckout += item.price;
  }

  getTotalCheckout() {
    /* return 10; */
    /* return this.items == 1 ? 10 : 20; */
    return this.totalCheckout;
  }
}
