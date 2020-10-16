function getProperty<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, 'd'));

// Tidak bisa, karena key z dalam object x tidak ada
// console.log(getProperty(x, 'z'));
