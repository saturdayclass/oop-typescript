interface generics<T> {
  propA: T;
}

function genericsFunction<T>(value: T): generics<T> {
  let data: generics<T> = {
    propA: value,
  };

  return data;
}

console.log(genericsFunction<string>('asas'));
console.log(genericsFunction<number>(11212));
console.log(genericsFunction<boolean>(false));
