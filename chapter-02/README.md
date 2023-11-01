# Chapter 2

## Expressions and Statements:
- An expression is a fragment of code that produces a `value`.
- A statement can change the internal state of the machine in a way that will affect the statements that come after. These changes are called `side effects`.

## Bindings:
- To catch and hold values, JavaScript provides a thing called a `binding` or `variable`.
- `let`, `var`, `const` are keywords that indicate a binding.
- The `=` operator can be used at any time on existing bindings to disconnect then from their current value and have them point to a new one.
- When defining a binding without giving it a value the value is `undefined`.
- `const` bindings points at the same value as long as it lives.

## Binding Names (variable names):
- binding name may include `$` or `_` but no other punctuation or special characters.
- keywords can't be used as a binding name.

## The Environment:
- the collection of bindings and their values that exist at a given time is called the `environment`.

## Functions:
- A function is a piece of program wrapped in a value.
- Executing a function is called `invoking`, `calling`, `applying`.
- Values given to functions are called `arguments`.

## The `console.log` function:
- `console.log` function that writes out its arguments to some text output device.
- Though binding names cannot contain period characters (.), `console.log` does have one. it's not a simple binding. It's actually an expression that retrieves the `log` property from the value held by the `console` binding.

## Return values:
- Showing a dialog box or writting text to the screen is a `side effect`.
- A lot of functions are useful because of the side effects they produce.
- When a function produce a value, it is said to `return` that value.

## Control flow:
- The statements are executed as if they are a story, from top to bottom.
---
- `Number`, `String`, `Boolean` functions they convert values to those types.
ex.
```js
let theNumber = Number(prompt("Pick a number");
console.log("The square root of this number is " + theNumber * theNumber);
```
---
## Conditional execution:
- To create a branching road, where the program takes the proper branch based on the situation at hand. This is called `conditional execution`.
- Conditional execution is created with the `if` keyword.
ex.
```js 
let theNumber = Number(prompt("pick a number");
if (!Number.isNaN(theNumber)){
  console.log("The square root of this number is " + theNumber * theNumber);
}
```
- The `deciding expression` is written after the keyword between parentheses, followed by the statement to execute.
- `Number.isNaN` function is a standard JavaScript function that returns `true` only if the argument it is given is `NaN`.
- Code wrapped in braces ({ }), group any number of statements into a single statement, called a `block`
- The case when the condition is `false` is executed by the statements followed by the `else` keyword.
- If you have more than two paths to choose from, you can `chain` multiple `if/else` pairs together.
ex.
```js
let num = Number(prompt("pick a number");
if (num < 10){
  console.log("Small");
} else if (num < 100){
  console.log("Medium");
} else {
  console.log("Large");
}
```

## While and Do loops:
- The idea of writing a program is to make something less work.
- Running a piece of code multiple times. This form of control flow is called a `loop`.
- Statement starting with keyword `while` creates a loop.
- The loop keeps entering that statement as long as the expression produces a value that gives `true` when converted to boolean.
```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```
- A `do` loop is a control structure similar to a `while` loop, It differs only on one point. a `do` loop always executes its body at least once.
```js
let yourName;
do {
  yourName = prompt("who are you?");
} while (!yourName);
console.log(yourName);
```
- Applying the `!` operator will convert a value to Boolean type before negating it, all strings except `""` convert to `true`.

## Indenting code (spaces and line breaks):
- The role of this `indentation` inside blocks is to make the structure of the code stand out.
- The visual shape of a program corresponds to the shape of the blocks inside it.

## For loops:
- All the statements that are related to the "state" of the loop are grouped together after `for`.
```js
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
```
- The first part `initializes` the loop.
- The second part is the "expression" that `checks` whether the loop continues or not.
- The third part `updates` the state of the loop after every iteration.

## Breaking out of a loop:
- A statement called `break` has effect of immediately jumping out of the enclosing loop.
- A statement called `continue` is encountered in a loop body, controls jumps out of the body and continues with the "loop's next iteration".
- If you accidentally write an end condition that always produces `true`, your program will be stuck in an `infinite loop`.

## Updating bindings succinctly
- When looping a program often needs to "update" a binding to hold a value based on that binding's previous value.
```js
counter = counter + 1;
//or
counter += 1;
//or
counter++;
```

## Dispatching on a value with switch:
- There is a construct called `switch` that is intended to express such a "dispatch" in a more direct way.
```js
switch(expression) { 
   case constant-expression1: { 
      //statements; 
      break; 
   } 
   case constant_expression2: { 
      //statements; 
      break; 
   } 
   default: { 
      //statements; 
      break; 
   } 
}
```
- The `default` statements are executed if no matching value is found.
- Statements will continue executing, even accross other labels, until it reaches a `break` statement.
- Be careful it is easy to forget such a `break`, which will cause the program to execute code you don't want executed.

## Capitalization:
- It's helpful to use multiple words to clearly describe what the binding represents.
- Most JavaScript programmers, they capitalize every word except the first.
- In few cases, the `Number` function, the first letter is capitalized, to mark this function as a constructor.

## Comments:
- Writing thoughts as part of your program that people understand and it's ignored by the computer.
- comments are written with `//` before or when writing multiple lines we use `/* your comment */`.
