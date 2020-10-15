// Tidak jauh berbeda dari generics interface, perbedaanya generics type bisa digunakan untuk variable. Sedangkan generics interface cenderung ke data object.

type generics2<T> = T;

function genericsFunction2<T>(value: T) {
  return value;
}

console.log(genericsFunction2<string>('Coba'));
