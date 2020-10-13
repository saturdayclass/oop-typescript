class Animal {
  name: string;

  constructor(nama: string) {
    this.name = nama;
  }
}

interface IShark extends Animal {
  swim(): void;
}

class Shark implements IShark {
  name: string;

  swim(): void {
    console.log('berenang');
  }
}
