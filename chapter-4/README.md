# Chapter 4
## Data Structures: Objects and Arrays:
- Numbers, Booleans, and strings are the atoms that data structures are built from.
- `Objects` allow us to group values __including other objects__ to build more complex structures.

### Data sets:
- The `Array` is written as a list of values between square brackets, separated by commas.
- The "notation" for getting at the elements inside an array also uses square brackets. ex.`arr[2]` the compiler will look up the element in the "left-hand" expression that corresponds to the `index`.
- The first element in the array is retrieved by `zero` index `arr[0]`.

### Properties:
- Almost all JavaScript values have `properties` ex. `String.length`, `Math.max`. The "exceptions" are `null` and `undefined`.
- Two main ways to access properties in JavaScript are with a dot and with square brackets. `value.x` fetches the property of `value` named `x`, `value[x]` tries to evaluate the expression x and uses the, converted to a string, as the property name.
- Property names are "strings". Dot notations work only with names that look like "valid binding names". properties names "2", "John Doe", you must use square brackets.
- The elements in an array are stored as the array's properties.

### Methods:
- Properties that contain "functions" are generally called `methods` of the value they belong to. ex. "`toUpperCase` is a method of a string".
- The `push` method adds value to the end of the array. the `pop` method does the opposite, removing the last value in the array and "returning" it.
- A `stack` is a data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first.

### Objects:
- Values of the type `object` are arbitrary collections of properties. To create an object is by using braces as an expression.
- Inside the braces, there is a list of properties separated by commas.
- Reading a property that doesn't exist will give you the value `undefined`.
- It is possible to assign a value to a property expression with the `=` operator. This will replace the property's vlue if it already existed or create a new property of that object.
- The `delete` operator will remove the named property from the object.
```js
let anObject = { left: 1, right:2 };
console.log(anObject.left);
// 1
delete anObject.left;
console.log(anObject.left);
// undefined
console.log("left" in anObject);
// false
console.log("right" in anObject);
// true
```
- The difference between setting a property to `undefined` and actually deleting it is that, in the first case, the object still `has` the property(it just doesn't have a very interesting value), whereas in the second case the property is no longer present and `in` will return `false`.
- you can use `Object.keys` to know what properties the object has.
- There's an `Object.assign` function that copies all properties from one object into another.
```js
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// {a: 1, b: 3, c: 4}
```
- Arrays are just a kind of object specialized for storing "sequences" of things. If you evaluate `typeof[]`, it produces "object".

### Mutability:
- Types such as "numbers, "strings", and "booleans" are all `immutable`, it is possible to change values of those types.
- When we have two numbers, 120 and 120 they are the same number and they refer to the same physical bits. With "objects", there is difference between having two references to the same object and having two different objects that contain the same properties.
```js
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// true
console.log(object1 == object3);
// false
object1.value = 15;
console.log(object2.value);
// 15
console.log(object3.value);
// 10
```
The `object1` and `object2` bindings "grasp" the same object, changing one of them will also change the other (They are said to have the same `identity`). The binding `object3` points to a different object, it has the same properties but lives a separate life. 
- In JavaScript, when comparing objects with `==` operator, it compares by `identity`. 
- There is no "deep" comparison operation built in JavaScript that compare between objects by their properties not their identity. 

### Array loops:
- There is a simpler way to write such loops in modern JavaScript.
```js
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers)
    console.log(num); // 1 2 3 4 5
```
- The word `of` after a variable definition, it will loop over the elements of the value given after `of`. It works for "arrays" and "strings".

### Further arrayology:
- `push` and `pop` used to "add" and "remove" elements at the end of the array.
- `unshufit` and `shift` used to "add" and "remove" elements at the start of the array.
- To search for a specific value in an array, arrays provide an `indexOf` method. It searches through the array from the start to the end and returns the index at which the requested value was found, or `-1` if it wasn't found.
- To search from the end instead of the start, there's a similar method called `lastIndexOf`.
```js
console.log([1, 2, 3, 2, 1].indexOf(2));
// 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// 3
```
- Both `indexOf` and `lastIndexOf` take an "optional" second argument that indicates where to start searching.
- Another method called `slice`, which takes start and end indices and returns an array that has only the elements between them. The start index is "inclusive", the end element is "exclusive".
```js
console.log([0, 1, 2, 3, 4].slice(2, 4));
// [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// [2, 3, 4]
```
- The `concat` method can be used to "glue" arrays together to create a new array.
```js
function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// ["a", "b", "d", "e"]
```

### Strings and their properties:
- Values of type string, number, and boolean are not objects, though if you set new properties to them, it doesn't store there properies, but the language doesn't compalin.
- The `trim` method removes whitespaces (spaces, newlines, tabs, and similar characters) from the start and the end of a string.
- You can "split" a string on every occurrence of another string with `split` and `join` it again with `join`.
```js
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(" "));
// "Secretarybirds specialize in stomping"
```
- A string can be repeated with the `repeat` method, which creates a new string containing multiple copies of the original string, glued together.
```js
console.log("LA".repeat(3));
// "LALALA"
```

### Rest parameters:
- To write a function that accepts any number of arguments, you put three dots before the function's last parameter.
```js
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if(number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// 9
```
- You can use a similar three-dot notation to `call` a function with an array of arguments.
```js
let numbers = [5, 1, 7];
console.log(max(...numbers));
// 7
```
- This "spreads" out the array into the function call, passing its elements as "separate arguments".

### The math object:
- `Math` is a grab of number-related utility functions, such as `Math.max`, `Math.min`, `Math.sqrt`. `Math` is a cintainer to group bunch of related functionality.
- It provides `namespace` so that all these functions and values do not have to be global binding.
- Having too many global bindings "pollutes" the namespace. The more names have been taken, the more likely you are to accidentally overwrite the value of some existing binding. 
- `Math.random`, This is a function that returns a new psuedorandom number between "zero" and "one" every time you call it.
You ask for a new random number, it performs complicated computations on this hidden value to create a new value. It stores a new value and return some number derived from it. That way it can produce ever new, hard-to-predict numbers in a way that seems "random".
- `Math.floor` rounds down to the nearest whole number.
- `Math.ceil` rounds up to the nearest whole number.

### Destructuring:
- Desrtructuring is to get a value from an object type (array, regular object).
```js
let {name} = {name: "Faraji", age:23};
console.log(name);
// Faraji
```
- If you try to destructure `null` or `undefined`, you get an error.

### JSON:
- If you want to save data ina file for later or send it to another computer, you have to convert these tangles of memorry addresses to a description that can be stored or sent.
- What we do is to `serialize` the data. That means it is converted into a flat description. A popular serialization format is called `JSON`. (JavaScript Object Notation).
- JSON is used as data storage and communication format on the Web. 
- Difference between JavaScript objects and JSON is that JSON property names are surrounded by double quotes "", and only simple data expressions, no function calls, bindings, or any actual computation.
```js
{
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
}
```
- JaveScript provides functions `JSON.stringfy` that takes JavaScript value to returns a JSON-encoded string, and `JSON.parse` that takes such a string and converts it to the value it encodes.

