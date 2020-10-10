class Hewan4 {
  nama: string = '';
  kaki: number = 0;

  bernafas() {
    console.log('Bernafas');
  }
}

class Burung extends Hewan4 {
  warna: string = 'blue';
}

const burung = new Burung();
burung.nama = 'Garuda';
burung.kaki = 2;
burung.warna = 'Coklat';

console.log(burung);

burung.bernafas();
