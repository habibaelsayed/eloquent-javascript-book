# Chapter 3
### Functions:
- The concept of wrapping a piece of program in a value has many uses.
- It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.

### Defining a function:
- A function definition is regular binding where the value of the binding is a "function".
```js
const square = function(x) {
  return x * x;
}
console.log(square(12)); //144
```
- Functions may have a set of "parameters" ex. `x` , a "body" ex. `return x * x;` wrapped in braces.
- Some functions produce a value "return value" and some don't whose only result a "side effect".
- A function without a return value will return `undefined`.
- `Parameters` to a function behave like regular bindings, but their initial values are given by the `caller` of the function, not the code in the function itself.

### Bindings and Scopes:
- Each binding has a `scope` which the binding is visible.
- Bindings defined outside of any function or block, these are called `global bindings`.
- Bindings defined inside any function or block, these are called `local bindings`.
- Each function call acts in its own little world "its local environment".
- Bindings declared with `let` and `const` are in fact "local" to the block they are declared in.
- Bindings defined with `var` keyword are visible throughout the whole function or throughout the global scope.
- Each scope can "look out" into the scope around it.
- In case multiple bindings have the same name code can see only "the innermost one", ex.
```js
let x = 5;
let p = function(){
    let x = 10;
    console.log(x);
}
p(); // 10
```

### Nested scope:
- Blocks and functions can be created inside other blocks and functions, producing "multiple degrees of locality".
- Each local scope can alse see all the local scopes that contain it and all scopes can see global scope.
- This approach to "binding visibility" is called `lexical scoping`.

### Functions as values:
- A function binding usually acts as a name for a specific piece of the program.
- A binding that holds a function if it's not constant, it can be assigned to a new value.

### Declaration notation:
- Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. (freedom to order code in a way that seems meaningful).

### Arrow functions:
```js
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
```
- The arrow comes after the list of parameters and is followed by the function's body.
- Arrow functions were to make it possible to write small function expressions in a less verbose way.

### The call stack:
- The way control flows through functions.
```js
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("bye");
```
- The computer must remember the "context" from which the call happened.
- The place where the computer stores this "context" is the `call stack`. Every time a function is called, the current "context" is stored in the top of this stack.
- When a function returns, it removes the top context from the stack and uses that "context" to continue execution.
- When the stack grows too big, the computer will fail with a message like `out of stack space` or `too much recursion`.
- Asking the computer a really hard question that causes an infinite "back-and-forth" between two functions, the computer will have an `infinite stack`. As it's, we will run out of space or `blow the stack`.
ex.
```js
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// ??????
```

### Optional arguments:
```js
function square(x) { return x * x; }
console.log(square(4, true, "sgfgf");
```
- The function when it has only one parameter it ignores any extra arguments.
- JavaScript is extremely "broad-minded" about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned to the value `undefined`.
- Allowing a function to be called with different numbers of arguments.
- If you write an `=` operator after a parameter, the value of that expression will replace the argument when it's not given.
ex.
```js
function power(base, exponent = 2) {
  let result = 1;
  for(let count = 0; count < exponent; count++) {
    result += base;
  }
  return result;
}
console.log(power(4)); //16
console.log(power(2, 6)); //64
```
- This is helpful because it makes it possible for a function to accept any number of arguments. example for `console.log`.
```js
console.log("U", "R", "Beautiful") //U R Beautiful
```
it outputs all the values it is given.

### Closure:
- Local bindings are recreated every time a function is called.
```js
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); //2
console.log(wrap2()); //2
```
- Local bindings are created anew for every call, and different calls can't tample on one another's local bindings.
- Being able to reference a specific instance of a local binding in an enclosing scope, is called `closure`.
- A function that refernces bindings from local scopes around it is called a `closure`.
- A good mental model is to think of function values as containing both the code in their body and the environment in which they are created.
```js
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
//10
```

