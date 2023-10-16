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

