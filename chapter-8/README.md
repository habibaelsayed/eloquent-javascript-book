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

