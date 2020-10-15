class ClassA {
  name: string = 'ClassA';
}

class ClassBaru<T> {
  classProp: T;

  constructor(props: T) {
    this.classProp = props;
  }
}

const classA = new ClassA();
const classBaru = new ClassBaru(classA);
console.log(classBaru);
