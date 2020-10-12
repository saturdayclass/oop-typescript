class ProductA {
  private _price: number = 0;
  private diskon: number = 0.05;

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value - value * this.diskon;
  }
}

const productA = new ProductA();
productA.price = 10000;
console.log(productA.price);
