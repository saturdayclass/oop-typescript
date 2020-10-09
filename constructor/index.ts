/* 
Constructor
adalah sebuah method yang akan di panggil terlebih dahulu
ketika sebuah object di buat menggunakan class
*/

class Hewan2 {
  constructor() {
    console.log('Constructor akan selalu di panggil terlebih dahulu');
  }
}

const hewan2 = new Hewan2();
