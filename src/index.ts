
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 2));

function subtract(a: number, b: number): number {
  return a - b;
}
console.log(subtract(1, 2));

//callback functions

function addAndHandle(a: number, b: number, cb: (result: number) => void) {
  const result = a + b;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

//promises

function addPromise(a: number, b: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

addPromise(10, 20).then((result) => {
  console.log(result);
});

//interfaces

interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello ${person.name}, you are ${person.age}`);
}

greet({ name: "John", age: 20 });

//generics - typesafe arrays

function generics<T>(input: T) :T {
  return input;
}

console.log(generics(10));
console.log(generics("Hello, string"));

function myArray<T>(items: T[]): T[] {
  return items;
}

console.log(myArray([1, 2, 3]));


