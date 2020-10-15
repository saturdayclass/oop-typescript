// Generic ini membuat sebuah class, function atau interface menjadi memiliki berbagai macam type data yang dinamis

function getData<T>(value: T) {
  return value;
}

console.log(getData<string>('A').length);
