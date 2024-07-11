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

### CommonJS
- Approach to bolted-on Javascript modules.
- A function called `require`. When calling it with module name of a dependency, it makes sure the module is loaded and returns its interface.
- Modules automatically get their own local scope. All they have to do is call `require` to access their dependencies and put their interface in the object bound to `exports`.
```js
const ordinal = require("ordinal");
const { days, months } = require("date-names");

exports.formatDate = function(date, format){
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if(tag == "YYYY") return date.getFullYear();
        if(tag == "M") return date.getMonth();
        if(tag == "MMMM") return months[date.getMonth()];
        if(tag == "D") return date.getDate();
        if(tag == "dddd") return days[date.getDay()];
    });
};
``` 
- Destructuring is very convenient when creating bindings for imported interfaces.
- The module adds its interface function to `exports` so that modules that depend on it get access to it.
```js
const {formatDate} = require("./format-date");
console.log(formatDate(new Date(2017, 9, 13),
                                "dddd the Do"));
// Friday the 13th
```
- `require` keeps a store (cache) of already loaded modules. when called, it first checks if the requested module has been loaded and if not, loads it.
- Though the module system will create an empty interface object for you (bound to `exports`), you can replace that with any value by overwriting `module.exports`.
- By defining `require`, `exports`, and `module` as parameters for the generated wrapper function. The loader makes sure that these bindings are available in the module's scope.
- The way the string given to `require` is translated to an actual filename or web address differs in different systems. 
 
### ECMAScript Modules
- CommonJS modules remain a bit of a duct-tape hack as the things you add to `exports` are not available in the local scope.
- In CommonJS modules it can be hard to determine the dependencies of a module without running its code.
- In ES modules, you use a special `import` keyword.
```js
import ordinal from "ordinal"
import {days, months} from "date-names"

export function formateDate(date, format) {/* ...*/}

```
- An ES module's interface is not a single value but a set of "named bindings" so you import a binding not a value. means an exporting module may change the value of the binding at any time.
- When there is a binding name `default`, it is treated as the module's main exported value.
```js
export default ["Winter", "Spring", "Summer", "Autumn"];
```
- It is possible to rename imported bindings using the word `as`.
```js
import {days as dayNames} from "date-names";
console.log(dayNmaes.length);
// 7
```
- ES module imports happen before a module's script starts running.