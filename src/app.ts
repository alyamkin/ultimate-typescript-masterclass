/**
 * A 'this' Keyword Primer
 */

/*function myFunction() {
  console.log('Function:::', this);
}

myFunction();

const myObj = {
  myMethod() {
    console.log('Object:::', this);
  },
};

myObj.myMethod();

class MyClass {
  myMethod() {
    console.log('Class:::', this);
  }
}

const myInstance = new MyClass();
const myInstance2 = new MyClass();
console.log(MyClass.prototype);*/

/**
 * Exploring 'this' with .call, .bind, .apply
 */

/*const myObj = {
  myMethod() {
    console.log('Object:::', this);
  },
};

//myObj.myMethod();

function myFunction(...text: string[]) {
  console.log('Function:::', this, text);
}
myFunction('abc');
myFunction.call(myObj, 'abc', 'def');
myFunction.apply(myObj, ['abc', 'def']);

const newFUnction = myFunction.bind(myObj);
newFUnction('ghj');*/

/**
 * Arrow Function and Lexical Scope
 * Typing 'this' and 'nonimplicitthis'
 */

/*class MyClass {
  myMethod() {
    console.log('1', this);
    setTimeout(() => {
      console.log(2, this);
    }, 0);
  }
}

const myInstance = new MyClass();
myInstance.myMethod();*/

/**
 * Typing 'this' and 'nonimplicitthis'
 */

/*const element = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  console.log(this);
}

element.addEventListener('click', handleClick, false);*/

/**
 * 'typeof' Type Queries
 */

/*const person = {
  name: 'Todd',
  age: 27,
};

type Person = typeof person;

const anotherPerson: Person = {
  name: 'John',
  age: 30,
};*/

/**
 * 'keyof' Index Type Queries
 */

/*const person = {
  name: 'Todd',
  age: 27,
};

type Person = typeof person;
type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys];

const anotherPerson: Person = {
  name: 'John',
  age: 30,
};*/

/**
 * 'keyof', Generics and Lookup types
 */

/*const person = {
  name: 'Todd',
  age: 27,
};

type Person = typeof person;
type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys];

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, 'name');

const anotherPerson: Person = {
  name: 'John',
  age: 30,
};*/

/**
 * "Readonly" Mapped Type
 */

/*interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Todd',
  age: 27,
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function freeze<T>(obj: T): MyReadonly<T> {
  return Object.freeze(obj);
}

const newPerson = freeze(person);*/

/**
 * "Partial" Mapped Type
 */

/*interface Person {
  name: string;
  age: number;
}

interface PartialPerson {
  name?: string;
  age?: number;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

function updatePerson(person: Person, prop: Partial<Person>) {
  return { ...person, ...prop };
}

const person: Person = {
  name: 'Todd',
  age: 27,
};

updatePerson(person, { name: 'ddd' });*/

/**
 * "Required" Mapped Type,Modifiers
 */

/*interface Person {
  name: string;
  age?: number;
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

const person: Required<Person> = {
  name: 'Todd',
  age: 30,
};

function printAge(person: Required<Person>) {
  return `${person.name} is ${person.age}`;
}

const age = printAge(person);*/

/**
 * "Pick" Mapped Type
 */

/*interface Person {
  name: string;
  age: number;
  address: {};
  gender: string;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const person: MyPick<Person, 'name' | 'age' | 'address'> = {
  name: 'Todd',
  age: 30,
  address: {},
};*/

/**
 * "Record" Mapped Type
 */

/*let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
  current: string;
  next: string;
}

const item: Record<keyof TrackStates, string> = {
  current: 'fldsjfk',
  next: 'erdfpss',
};

dictionary[0] = item;*/

/**
 * 'typeof' and Type Guards
 */

/*function foo(bar: string | number) {
  if (typeof bar === 'string') {
    // string
    return bar.toUpperCase();
  }
  if (typeof bar === 'number') {
  }
}

class Song {
  constructor(public title: string, public duration: string | number) {}
}

function getSongDuration(item: Song) {
  if (typeof item.duration === 'string') {
    return item.duration;
  }
  const { duration } = item;
  const minutes = Math.floor(duration / 60000);
  const seconds = (duration / 1000) % 60;

  return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(new Song('Wonderful', '05:31'));

console.log(songDurationFromString);

const songDurationFromMS = getSongDuration(new Song('Wonderful', 3330000));*/

/**
 * "instanceof" and Type Guards
 * User Defined Type Guards
 * Literal Type Guards and "in" Operator
 */

/*class Foo {
  bar() {}
}

const bar = new Foo();
console.log(Object.getPrototypeOf(bar) === Foo.prototype);

console.log(bar instanceof Foo);

class Song {
  kind: 'song';
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  kind: 'playlist';
  constructor(public name: string, public song: Song[]) {}
}

function isSong(item): item is Song {
  // return item instanceof Song;
  return 'title' in item;
}

function getItemName(item: Song | Playlist) {
  // if (isSong(item)) {
  if (item.kind === 'song') {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song('Wonderufl', 3000));

const playlistName = getItemName(
  new Playlist('Wonderfull songs list', [
    new Song('Wonderfull, wonderfull', 32999),
  ])
);

console.log('Song name:', songName);
console.log('Playlist name:', playlistName);*/

/**
 * Intersection Types
 */

/*interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  card: string;
  cvv: string;
}

interface PayPal {
  email: string;
}

type CheckoutCart = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
// type CheckoutABC = Order & {name: string};

const order: Order = {
  id: 'fdfs',
  amount: 100,
  currency: 'USD',
};

const orderCard: CheckoutCart = {
  ...order,
  card: '1000 2000 3000 4000',
  cvv: '123',
};

const orderPayPal: CheckoutPayPal = {
  ...order,
  email: 'abc@fhjdf',
};*/

/**
 * Discriminated (Tagged) union
 */

/*interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  type: 'stripe';
  card: string;
  cvv: string;
}

interface PayPal {
  type: 'paypal';
  email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
// type CheckoutABC = Order & {name: string};

const order: Order = {
  id: 'fdfs',
  amount: 100,
  currency: 'USD',
};

const orderCard: CheckoutCard = {
  ...order,
  type: 'stripe',
  card: '1000 2000 3000 4000',
  cvv: '123',
};

const orderPayPal: CheckoutPayPal = {
  ...order,
  type: 'paypal',
  email: 'abc@fhjdf',
};

type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
  if (payload.type === 'stripe') {
    console.log(payload.currency, payload.cvv);
  }

  if (payload.type === 'paypal') {
    console.log(payload.email);
  }
}*/

/**
 * Interfaces vs Type Aliases
 */

/*interface Item {
  name: string;
}

interface Artist extends Item {
  songs: number;
}

interface Artist {
  getSongs(): number;
}

type Artist2 = {
  name: string;
} & Item;

const artist: Artist = {
  name: 'Todd',
  songs: 5,
  getSongs() {
    return this.songs;
  },
};*/

/**
 * Interfaces vs Classes
 */

// interface Artist {
//   name: string;
// }

// class ArtistCreator /*implements Artist*/ {
//   constructor(public name: string) {}
// }

// function artistFactory({ name }: ArtistCreator) {
//   return new ArtistCreator(name);
// }

// artistFactory({ name: 'Todd' });

/**
 * Function Generics
 */
/*class Pizza {
  constructor(private price: number, private name: string) {}
}

class List<T> {
  private list: T[];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

const list = new List<Pizza>();

list.addItem(new Pizza(20, 'Pepperonni'));

const pizzas: Pizza[] = list.getList();

class Coupon {
  constructor(private name: string) {}
}

const anotherList = new List<Coupon>();

anotherList.addItem(new Pizza(12, 'Pepperoni'));*/

/**
 * Function Overloads
 */
/*function reverse<T>(something: T): T;
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray.split('').reverse().join('');
  }

  return stringOrArray.slice().reverse();
}

reverse<string>('Pepperoni');
reverse<string[]>(['bacon', 'pepperoni', 'chili', 'mushrooms']);*/

/**
 * Numeric Enums and reverse mapping
 */

/*enum Sizes {
  Small,
  Medium,
  Large,
}

enum Sizes {
  ExrtaLarge = 3,
}

console.log(Sizes.Medium, Sizes[Sizes.Small]);/*

/**
 * String Enums and Inline members
 */

/*enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

let selectedSize: Size = Size.Small;

function changeSize(newSize: Size): void {
  selectedSize = newSize;
}

console.log('Old size:', selectedSize);

changeSize(Size.Large);

console.log('New size:', selectedSize);*/

/**
 * Writing Declaration Files
 * Augmenting Modules with declarations
 * Emitting Declaration Files
 */

/*import * as _ from 'lodash';

const chunk = _.chunk([1, 2, 3, 4], 2); // [[1,2], [3,4]]

_.mixin({
  log(item: string) {
    console.log(':::', item);
  },
});

_.log('Hello');

export class Foo {
  constructor(public name: string) {}
  bar(age: number) {}
}*/

/**
 * Include, Exlude and File properties
 */

function log(message: string) {
  console.log(message);
}
