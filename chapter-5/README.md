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

### Filtering arrays:
- Filtering out the elements in an array that don't pass the test.
```js
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// [{name: "Adlam", ...}, ...]
```
- the `filter` function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test.
- This function is `pure`, `filter` is a standard array method.

### Transforming with map:
- The `map` method tranforms an array by applying a function to all of its elements and building a new array from the returned values.
- The new array will have the same length as the input array, but its content will have been `mapped` to a new form by the function.
```js
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// ["Adlam", "Arabic", "Impreial Aramic", ...]
```

### Summarizing with reduce:
- `reduce` function sometimes called `fold`, it builds a value by repeatedly taking a single element from the array and combining it with the current value.
```js
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// 10
```

### Composability:
- Higher-order functions start to shine when you need to `compose` operations.
```js
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year))));
// 1188
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year))));
// 188
```
- You can use it as a `pipeline`.
- This approach will build up new arrays but we can computes it processing only the some numbers and doing less work, but if you're processing huge arrays, and doing so many times, the less "abstract" style might be worth the extra speed.

### Strings and character codes:
- UTF-16, the format used by JavaScript strings, was invetend.
```js
let horseShoe = "🐎👟";
console.log(horseShoe.length);
// 4
console.log(horseShoe[0]);
// (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// 55357 (code of the half-character)
console.log(horseShoe.charPointAt(0)); //gives you a code unit (a type of loop)
// 128052 (Actual code for horse emoji)
```



