# Chapter 8

## Bugs and Errors
- Flaws in computer programs are usually called `bugs`.

### Language:
- In JavaScript, the concept of bindings and properties is vague enough that it will rarely catch "typos" before running the program.
- It allows to do some clearly nonsensical things without complaint, 
```js 
true * "monkey";
```
- Writing a program that doesn't follow the language's grammer will immediately make the computer complain.
- Calling something that's not a function or looking up a property of undefined value, will cause an error.
- The process if finding mistakes _bugs_ in programs is called `debugging`.

### Strict mode: 
- JavaScript can be made `little` stricter by enabling `strict` mode.
```js
function canYouSpotTheProblem() {
    "use strict";
    for(counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}
canYouSpotTheProblem();
// ReferenceError: counter is not defined
```
- This causes an error to forget to put `let` in front of your binding. In general JavaScript, it quietly creates a "global" binding and uses that.
- In `strict mode`, the `this` binding holds the value `undefined` in functions that are not called as methods. Without this mode `this` refers to the global object, which is an object whose properties are the global bindings.
```js
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");
console.log(name); 
// Ferdinand
```
- When forgetting to write the `new` keyword to create an object out of the constructor function (Person), it created a global binding called `name`.
- In `strict mode` the result is different.
```js
"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");
console.log(name); 
// TypeError: cannot set property 'name' of undefined
```
- Strict mode, It disallows giving a function multiple parameters with the same name.

### Types:
- JavaScript considers data types only when actually running the program, and even there often tries to implicitly convert values to the type it expects.
- If you have information about the kind of value that goes into or comes out of a function, you're less likely to be confused of the mistakes that might come out of this function.
- You could add a comment befire the function declaration.
```js
// (VillageState, Array) -> {direction: string, memory: Array}
function goalOrientedRobot(state, memory) {
    // ...
}
```
- One thing about types is that they need to introduce their own complexity to be able to describe enough code to be useful.
- When the types of a program are known, it is possible for the computer to `check` them for you, pointing out the mistakes before the program is run.
- `TypeScript` is JavaScript dialect that add types to the language and check them.

### Testing:
- Computers are good at repetitive tasks, and testing is the ideal repetitive task.
- Automated testing is the process of writing a program that tests another program.
- Writing tests ia a bit more work than testing manualy, but it takes only a few seconds to verify that your program still behaves properly in all the situations.
- Tests usually take the form of little labeled programs that verify some aspect of your code.
```js
function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}
test("convert Latin to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
})
test("convert Latin to uppercase", () => {
    return "مرحبا".toUpperCase() == "مرحبا";
})
```
- There exist pieces of software that help you build and run collections of tests (`test suites`) by providing a language (in the form of functions and methods) suited to expressing testing and by outputting informative information when a test fils, Called `test runners`.
- Generally, the more external objects that the code interacts with, the harder it is to set up the "context" in which to test it.

### Debugging:
- The next step to figure out `what` the problem is.
- Sometimes you can know the problem by the error message pointing to the code line and error discription.
- An alternative to using `console.log` to peek into the problem's behavior is to use the `debugger` capabilities of your browser. Browsers come with the ability to set a `breakpoint` on a specific line of your code.
- The breakpoint is used when the program reaches a line with a breakpoint, it is paused so you can "inspect" the values of bindings at that point. 
- Another way to set a breakpoint is to include a `debugger` statement (simply that keyword) in your program, the program will pause whenever it reaches such a statement.

### Error propagation:
- If you build something that is going to be used by anyonw else, when a problem comes out you can take the bad input in stride ans continue, or in other cases, it is better to report to the user what went wrong and then give up.
- When you function takes only one type of an input, if its type is different one option is to make it return a "special value" (`null`, `undefined`, `-1`).
- You can do something with functions like wrap the result in an object to be able to distinguish success from failure.
```js
function lastElement(array) {
    if (array.length == 0) return {failed: true};
    else return {element: array[array.length - 1]};
}
```

### Exceptions:
- `Exception handling` is to stop what we are doing when a function can't proceed noramally and immediately jump to the place that knows how to handle the problem. 
- `Exceptions` are the mechanism that makes it possible for code that runs into a problem to `raise` or `throw` an exception.
- When throwing an exception it jumps out of not just the "current" function, but also "its callers", all the way down to first call that started the execution, this is called `unwinding the stack`. (throwing away all the call "contexts" it encounters) --> the stack of function calls.
- Their power lies that you can set "obstacles" along the stack to catch the exception, to address the problem and then continue to run the program.
```js
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}
function look() {
    if (promptDirection("Which way?") == "L") return "a house";
    else return "two angry bears";
}
try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}
```
- `throw` keyword is used to raise an exception.
- Catching one is done by wrapping a piece of code in a `try` block, followed by the keyword `catch`.
- We used the `Error` constructor to create our exception value. a standard JavaScript constructor that creates an object with a `message` property.
- Instances of The `Error` constructor gather information about the call stack that existed when the exception was created, called `stack trace`, stored in the "stack" property. helpful to debug a problem, it tells us the function where the problem occurred and which functions made the "failing call".

### Cleaning up after exceptions:
- When code has several "side effects", an exception might prevent some of them from taking place.
- Example of a bad banking code:
```js
const accounts = {
    a: 100,
    b: 0,
    c: 20
};
function getAccount() {
    let accountName = prompt("Enter account name");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}
function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}
```
- When the program is broken off an exception, this will make the money dissappear.
- One way to prevent this is to use fewer side effects, a programming style that computer new values instead of changing existing data helps. (no half-finished value, no problem)
- Another feature with `try` statement, using `finally` block instead of or inaddition to a `catch` block.
- `finally` block says: "no matter what happens, run this code after trying to run the code in the `try` block".
```js
function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount;
        }
    }
}
```
- Note: when an exception is thrown in the `try` block, `finally` block doesn't interfere with the exception. After the `finally` block runs, the stack continues "unwinding".

### Selective catching:
- An unhandled exception is a reasonable way to signal a broken program.
- On modern browsers, console will provide you with some information about which function calls were on the stack when the problem occurred.
- Don't blanket-catch exceptions unless it is for the purpose of "routing" them somewhere __for example, over the network to tell another system that our program crashed.
- To catch a "specific" kind of exception, by checking in the `catch` block whether the exception we got is the one we are interested in. by comparing its `message` property against the error message we happen to expect.
```js
class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: ", result);
}
```
- An error class extending from `Error` constructor to pass the error message as an argument. 
```js
for (;;) {
    try {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a Valid direction. Try again.");
        } else {
            throw e;
        }
    }
}
```
- This will catch only instances of `InputError`.

### Assertions:
- `Assertions` are checks inside a program that verify that something is the way it is supposed to be. to handle program mistakes.
```js
function firstElement(array) {
    if (array.length == 0) {
        throw new Error("firstElement called with []");
    }
    return array[0];
}
```
- Instead of silently returning `undefined`, this will loudly blow up your program as soon as you misuse it.
- Makes it less likely for such mistakes to go unnoticed and easier to find their cause when they occur.
- Don't use assertions for every possible kind of bad input to anoid noise in your code, just use them for easy to make mistakes that you find yourself making.


