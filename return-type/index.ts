class Burung {
  private kaki: number = 2;

  // Return type untuk angka
  getKaki(): number {
    return this.kaki;
  }

  // Tidak boleh mengembalikan return
  terbang(): void {
    console.log('Terbang....');
  }

  // Return type untuk sebuah proses asyncrounus
  async makan(): Promise<string> {
    return 'Makan Dulu Bosku';
  }
}

const burung = new Burung();
console.log(burung.getKaki());
burung.terbang();
console.log(burung.makan());
