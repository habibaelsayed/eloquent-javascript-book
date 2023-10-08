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

