// Dalam constructor kita bisa menyimpan arguments yang akan dikirim oleh parameter ketika class di instasiakan
class Hewan4 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

const burung = new Hewan4('Beo', 2);
console.log(burung);

// Cara lebih singkat
// Kita bisa gunakan public dalam contructor

class Hewan5 {
  constructor(public nama: string, public kaki: number) {}
}

const burung2 = new Hewan5('Garuda', 2);
console.log(burung2);
