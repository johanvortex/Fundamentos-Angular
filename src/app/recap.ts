const username: string = ' Johan';
const suma = (a: number, b: number) => {
  return a + b;
};
suma(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const johan = new Person(23, 'Johan');
johan.age;
