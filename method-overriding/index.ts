// Method overriding berfungsi untuk me-replace atau mengganti method yang sudah ada di parent class nya

class Hewan6 {
  bernafas(): void {
    console.log('Semangat Bernafas');
  }
}

class Katak2 extends Hewan6 {
  bernafas(): void {
    console.log('Malas Bernafas');
  }
}

const katak2 = new Katak2();
katak2.bernafas();
