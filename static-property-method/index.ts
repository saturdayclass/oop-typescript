// Dengan static kita tidak perlu lagi menginstasiasi class.
class Ayam {
  static kaki: number = 2;

  static jalan(): void {
    console.log(`Ayam berjalan dengan ${this.kaki} kaki`);
  }
}

console.log(Ayam.jalan());
