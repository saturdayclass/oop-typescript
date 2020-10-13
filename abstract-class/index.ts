// absctract class, tidak bisa di instasiasi secara langsung karena dia masih belum jelas atau abstract. Dengan abstract class juga kita dapat membuat sebuah template untuk class turunan

abstract class Hewan7 {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  abstract bergerak(): void;
}

class Kucing1 extends Hewan7 {
  constructor() {
    super('Kucing');
  }

  bergerak(): void {
    console.log(`${this.nama} berjalan`);
  }
}

class Burung12 extends Hewan7 {
  constructor() {
    super('burung');
  }

  bergerak(): void {
    console.log(`${this.nama} Terbang`);
  }
}

const kucing1 = new Kucing1();
const burung2 = new Burung12();

kucing1.bergerak();
burung2.bergerak();
