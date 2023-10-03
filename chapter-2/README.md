# Chapter 2
### Expressions and Statements:
- An expression is a fragment of code that produces a `value`.
- A statement can change the internal state of the machine in a way that will affect the statements that come after. These changes are called `side effects`.

### Bindings:
- To catch and hold values, JavaScript provides a thing called a `binding` or `variable`.
- `let`, `var`, `const` are keywords that indicate a binding.
- The `=` operator can be used at any time on existing bindings to disconnect then from their current value and have them point to a new one.
- When defining a binding without giving it a value the value is `undefined`.
- `const` bindings points at the same value as long as it lives.

### Binding Names (variable names):
- binding name may include `$` or `_` but no other punctuation or special characters.
- keywords can't be used as a binding name.

### The Environment:
- the collection of bindings and their values that exist at a given time is called the `environment`.

### Functions:
- A function is a piece of program wrapped in a value.
- Executing a function is called `invoking`, `calling`, `applying`.
- Values given to functions are called `arguments`.

### The `console.log` function:
- `console.log` function that writes out its arguments to some text output device.
- Though binding names cannot contain period characters (.), `console.log` does have one. it's not a simple binding. It's actually an expression that retrieves the `log` property from the value held by the `console` binding.

