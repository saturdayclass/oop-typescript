// Super constructor digunakan unutuk memanggil contructor yang di miliki oleh parent class yang mana properynya akan di isi melalui constructor suprt ini

class Hewan5 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

class Katak extends Hewan5 {
  beracun: boolean;

  constructor(nama: string, kaki: number, beracun: boolean) {
    super(nama, kaki);
    this.beracun = beracun;
  }
}

const katak = new Katak('Katak', 4, false);

console.log(katak);
