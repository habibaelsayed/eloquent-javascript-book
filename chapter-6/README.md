# Chapter 6
## The secret life of objects
- Object-Oriented-Programming OOP has shaped the design of many programming languages.

### Encapsulation:
- The core idea in OOP to divide programs into smaller pieaces and make each piece responsible for managing its own state. (knowledge about each piece is `local` isolated from outside)
- Different pieces of a program interact with each other through `interfaces`.
- `interfaces`: limited sets of functions or bindings that provide useful functionality, hiding their precise implementation.
- Properties that are part of the interface are called `public`, the others, which outside code should not be touching, are called `private`.
- In JavaScript, It is common to put an "underscore" (_) at the start of property names to indicate that those properties are `private`.
- `Encapsulation`: separating interface from implementation.

### Methods:
- `Methods`: properties that hold function values.
- A method needs to do something with the object it was "called" on, as in `object.method()`, using `this` in its body automatically points at the object that it was called on.
```js
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// The white rabbit says 'Oh my ears and whiskers, how late it's getting!'
```
- If you want to pass the object explicity:
```js
speak.call(whiteRabbit, "Burp!");
// The white rabbit says 'Burp'
```
- You can't refer to the `this` of the wrapping scopein a regular function defined with the `function` keyword.
- `Arrow functions` are different, they don't bind their own `this` but can see the `this` binding of the scope "around them".
```js
function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// [0, 0.4, 0.6]
```

### Prototypes:
- Most objects have a `prototype`.
- A `prototype` is another object that is used as "a fallback source of properties".
- When an object gets a request for a prototype that it does not have, its prototype will be searched for the prototype, then the prototype's prototype, and so on.
- The prototype relations of JavaScript objects form a "tree-shaped" structure, and at the root of this structure sits `object.prototype`. It provides a few methods that show up in all objects.
- Many objects don't directly have `Object.prototype` as their properties but another objects type derived from them, like `Function.prototype`, `Array.prototype`.
```js
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}`);
    }
};
let killerRabbit = Object.create(protoRabbit); //prototype inheritance
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!");
// The killer rabbit says 'SKREEEEE!'
```
- The "proto" rabbit acts as a container for the properties that are shared by all rabbits.

### Classes:
- A `class` defines the shape of a type of object __ what methods and properties it has. 
- An `object` is called an `instance` of the class.
- To create an instance of a given class, you alse have to make sure it, itself, has the properties that instances of this class are supposed to have. This is what a `constructor` function does.
- The keyword `new` in front of a function call, the function is treated as a "constructor".
```js
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let weirdRabbit = new Rabbit("weird");
```
- Constructors automatically get a property named "prototype", by default holds a plain, empty object that derives from `Object.prototype`.
- The names of constructors are capitalized so that they can easily be distinguished.
- The actual prototype of a constructor is `Function.prototype` since constructors are "functions".
```js
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// true
```

### Class notation:
- JavaScript classes are constructor functions with a prototype property.
```js
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```
- A class declaration allows us to define a construtor and a set of methods all in a single place.
- Class declarations currently allow only `methods`, and not allowing saving a non-function value in there.
- `function`, `class` can be used both in statements and in expressions, When used as an expression, it doesn't define a binding but just produces the constructor as a value.
```js
let object = new class { getWord() { return "hello"; } }; // expression
console.log(object.getWord());
// hello
```

### Overriding derived properties:
- The prototype is added to the object `itself`. If there was already a property with the same name in the prototype, this property will no longer affect the object, it's hidden behind the object's own property.
```js
Rabbit.protoype.teeth = "small";
console.log(killerRabbit.teeth);
// small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// long, sharp, and bloody
console.log(blackRabbit.teeth);
// small
console.log(Rabbit.prototype.teeth);
// small
```
- `Rabbit` and `Object` prototypes lie behind `killerRabbit` as a kind of backdrop, where properties that are not found in the object itself "can be looked up".
- `Overriding` can be used to express exceptional properties in instances of a more generic class of objects.
```js
consloe.log([1, 2].toString());
// 1, 2
console.log(Object.prototype.toString.call([1, 2]));
// [object Array]
```

### Maps:
- A `map` is a data structure that associates values (the keys) with other values.
```js
let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
}
console.log(`Julia is ${ages["Julia"]}`);
// Julia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// Is toString's age known? true
```
- Plain objects derive from `Object.prototype`, so it's possible to create objects with `no prototype`. If you pass `null` to `Object.create`, the resulting object will not derive from `Object.prototype` and can safelty be used as a "map".
```js
console.log("toString" in Object.create(null));
// false
```
- There is a class called `Map` that is written for the exact purpose. (mapings and allows any type of keys).
```js
let ages = new Map();
ages.set("Boris", 39);
console.log(ages.has("toString"));
// false
```
- The methods `set`, `get`, and `has` are part of the interface of the `Map` object.

### Polymorphism:
- The standard prototypes define their "own" version of any property function ex. `toString` so they can create a string that contains more useful information than `[object Object]`.
```js
Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
}
console.log(String(blackRabbit));
// a black rabbit
```
- `Polymorphic` code can work with values of different shapes, as long as they support the interface it expects.
- `for/of` loop over several kinds of data structures. This is another case of "polymorphism".

### Symbols:
- Property names can be strings and also can be `symbols`.
- `Symbols` are values created with the `Symbol` function.
- Newly created symbols are "unique", you can't create the same symbol twice.
```js
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// 55
```
- Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully line alongside other properties, no matter what their names are.
```js
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
}
console.log([1, 2].toString());
// 1, 2
console.log([1, 2][toStringSymbol]());
// 2 cm of blue yarn
```

### The iterator interface:
- The object given to a `for/of` loop is expected to be `iterable`. This means it has a method named with the `Symbol.iterator`.
- When this method called, it should return an object that provides a second interface, `iterator`. It has:
1- a `next` method that returns the next result. (that result should be an object with a `value` property that provides the next value)
2- a `done` property which should be true when there are no more results and false otherwise.
3- a `value`.
- `next`, `value`, and `done` property names are `plain` strings, not symbols. 
```js
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// {value: "O", done: false}
console.log(okIterator.next());
// {value: "K", done: false}
console.log(okIterator.next());
// {value: undefined, done: true}
```


