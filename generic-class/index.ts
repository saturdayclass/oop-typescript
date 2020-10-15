interface generics3<T> {
  propA: T;
  methodA(): T;
}

class genericClass3<T> implements generics3<T> {
  propA: T;

  constructor(prop: T) {
    this.propA = prop;
  }

  methodA(): T {
    return this.propA;
  }
}

const genericClassA = new genericClass3<boolean>(true);
console.log(genericClassA.methodA());
