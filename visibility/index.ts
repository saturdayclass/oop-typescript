/* Visibility atau biasa di sebut dengan access modifier 
digunakan untuk mengatur dan membatasi akses property atau method yang ada pada sebuah class

ADA 3 MACAM
- Public, bisa digunakan di mana saja
- protected, hanya bisa digunakan oleh class itu sendiri dan turunanya
- private, hanya bisa digunakan oleh class itu sendiri

*/

class Hewan6 {
  public nama: string;
  protected kaki: number;
  private mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }
}

class Belalang extends Hewan6 {
  bernafas(): void {
    console.log(`${this.nama} sedang bernafas, dia memiliki kaki ${this.kaki}`);
  }
}

const belalang = new Belalang('Belalang', 2, false);
belalang.bernafas();
console.log(belalang);
