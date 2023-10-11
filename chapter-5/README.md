# Chapter 5
## Higher-Order Functions:
- A large program is a costly program, and not just because of the time it takes to build. Size involves complexity and complexity introduce mistakes "bugs" into programs.
- ex. a first whole program written:
```js
let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
```
second whole program:
```js
console.log(sum(range(1, 10)));
```
- The definitions of this (functions `sum` and `range`) will still involve loops, counters, and other details. But because they are expressing simpler concepts that a program as a "whole", they are easier to get right.

### Abstraction:
- Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.

### Abstracting repetition:
- Plain functions, are a good way to build abstractions. but sometimes they fall short.
- If we want to "do something" n times and abstract them into a function, we can pass a function as a parameter to that function who repeats "doing something".
```js
function repeat (n, action) {
    for(let i = 0; i < n ; i++) {
        action(i);
    }
}

repeat(3, console.log);
// 0
// 1
// 2

let labels = [];
// passing an arrow function as a parameter
repeat(5, i => { 
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```

### Higher-Order functions:
- Higher-order function is a function that accepts functions as "parameters" and/or "returns" a function.
- Higher-order functions allow us to abstract over `actions`, not just values.
```js
function noisy(f) {
    return(...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    }
}
noisy(Math.min)(3, 2, 1);
// calling with [3, 2, 1]
// called with [3, 2, 1], returned 1
```



