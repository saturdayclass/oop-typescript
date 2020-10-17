type ExampleType = 'oke';

// Tidak bisa, karena interface hanya bisa menyimpan data object
// interface ExampleInterface = 'aa';

// Interface cocok digunakan untuk sebuah class
// Sedangkan type cocok digunakan untuk sebuah variable atau function

interface A {
  name: string;
}

interface A {
  age: number;
}

// Tidak bisa
// type B = string;
// type B = string;
