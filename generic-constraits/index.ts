interface length {
  length: number;
}

function generic5<T extends length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const generics = generic5('asasss');
console.log(generics);

const generics1 = generic5({ length: 19, value: 222 });
