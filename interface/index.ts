// Interface adalah sebuah perjanjian yang mana semua property atau method dalam interface itu harus di implementasikan kepada class yang menggunakan interface tsb

interface AndroidPhone {
  name: string;
  home(): void;
  back(): void;
  menu(): void;
}

class Asus implements AndroidPhone {
  name: string;

  constructor(nama: string) {
    this.name = nama;
  }

  home(): void {
    console.log(`${this.name} home`);
  }

  back(): void {
    console.log(`${this.name} back`);
  }

  menu(): void {
    console.log(`${this.name} manu`);
  }
}

class gameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back(): void {
    console.log(`Kembali ke menu utama game`);
  }

  menu(): void {
    this.phone.menu();
  }

  home(): void {
    this.phone.home();
  }
}

const asus = new Asus('Zenfone 4');
const game = new gameA(asus);
game.back();
game.menu();
game.home();

// Iphone

interface ApplePhone {
  name: string;
  home(): void;
}

class Iphone implements ApplePhone {
  name: string;

  constructor(nama: string) {
    this.name = nama;
  }

  home(): void {
    console.log(`${this.name} Home`);
  }
}

const iphone = new Iphone('Iphone X');
// Tidak bisa
// const gameA = new gameA(iphone);
iphone.home();
