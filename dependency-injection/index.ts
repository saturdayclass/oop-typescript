class Store {
  private name: string = 'Store A';
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class FashionProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(nama: string, price: number) {
    this.name = nama;
    this.price = price;

    this.store = new Store();
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

const baju = new FashionProduct('Baju Pendek', 25000);
baju.sell();

// +++++++++++++++++++++++++++++++++

interface IStore {
  name: string;
  getProfit(): number;
}

class TokoBaru implements IStore {
  name: string = 'Toko Baru';
  private profit: number = 2000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class TokoLama implements IStore {
  name: string = 'Toko Lama';
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class HijabProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, nama: string, price: number) {
    this.name = nama;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const hijabMahal = new HijabProduct(tokoLama, 'Hijab Pasmina', 5000);
const hijabMahal2 = new HijabProduct(tokoBaru, 'Hijab Oke', 5000);

hijabMahal2.sell();
hijabMahal.sell();
