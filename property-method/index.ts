class Hewan3 {
  /* 
    Property
    Bisa di katakan sebuah variable yang ada di dalam class yang fungsinya sama-sama untuk menyimpan data
  */
  name: string = '';
  kaki: number = 0;
  mamalia: boolean = false;

  /* 
    Method
    adalah sebuah function yang terdapat di sebuah class
  */

  bernafas(): void {
    console.log(`${this.name} sedang bernafas`);
  }
}

const hewan3 = new Hewan3();

hewan3.name = 'Katak';
hewan3.kaki = 4;

console.log(hewan3);

hewan3.bernafas();
