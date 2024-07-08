# Chapter 10

## Modules

### Modules
- A module: a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (its interface).
- Module interfaces have a lot in common with object interfaces, They make part of the modules available to the outside world and keep the rest private.
- The relations between modules are called `dependencies` => when a module needs a piece from another module, it is said to depend on that module.
- To separate modules in that way, each needs it own private scope.
- Designing a fitting module structure can be difficult in the phase where you are still exploring the program.
- Once you have something that feels `solid`, that's good time to take a step back and organize it.

### Packages
- Once you start duplicating code, you are wasting time and energy moving copies around, That's where `Packages` come.
- A Package: a chunk of code that can be distributed (copied and installed). 
- It may contain one or more modules and has information about which other packages it depends on.
- A package has a documentaion with it explaining what it does for people who didn't write but can use it.
- In JavaScript, The infrastructure that provides a place to store and find packages and a convenient way to install and upgrade them provided by ( `NPM` Node Package Manager ) and online service to download packages from and a program (bundled with Node.js) that helps to install and manage them

### Improvised Modules
- You can use JavaScript functions to create local scopes and objects to represent module interfaces.
```js
const weekDay = function(){
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return {
        name(number) {return names[number];},
        number(name) {return names.indexOf(name); }
    }
}();

console.log(weekDay.name(weekDay.number("Sunday")));
// Sunday
```
- This style of modules provies isolation.
- It just puts its interface into the global scope and expects its dependencies.
- If we want to make dependency relations part of the code, we'll have to take control of loading dependencies. Doing that requires being able to execute `strings as code`.

### Evaluating data as code
- To execute string as code, the most obvious way is the special operator `eval`.
- It breaks some of the properties that scopes normally have, such as being easily predictable.
```js
const x = 1;
function evalAndReturnX(code){
    eval(code);
    return x;
}
console.log(evalAndReturnX("var x = 2"));
// 2
console.log(x);
// 1
```
- Another better way of interpreting data as code, to use the `Function Constructor`.
- It takes two arguments: 
    1- a string containing a comma-separated list of argumant names.
    2- a string containing the function body.
```js
let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4));
// 5
```

