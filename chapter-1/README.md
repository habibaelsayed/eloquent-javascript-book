# Chapter 1


## Values:
- Working with bits we must separate them into `chunks` that reperesent pieces of information these are called (values)

## Numbers:
- JavaScript uses fixed number of bits, 64 of them, to store a single number value.
- you need to worry about `overflow` only when dealing with truly astronomical numbers.

## Arithmetic:
- The main thing to do with numbers is arithmetic. (Arithmetic operations)
- The '+' and '*' symbols are called `operators`.
- When operators appear together without parentheses, the order in which they are applied is determined by the `precedence` of the operators.

## Special Numbers:
- There are three special values are considered in JavaScript as numbers but don't behave like normal numbers --> Infinity, -Infinity, NaN (not a number).
- You will get result `NaN` when calculationg '0/0' or 'Infinity - Infinity' or any number of other numeric operations that don't yield a (meaningful) result.

## Strings:
- To mark a string is used by: single quotes, double quotes, backticks.
- using backslash '\' to indicate a special meaning (`\n`, `\t`, ....) is called `escaping`.
- String are modeled as a series of bits inside the computer and this is done in JavaScript based on Unicode standard.
- Backtick-quoted strings are called `template literals`.
- using `${}` in a template literal using code within it will be computed then turned to a string.

## Unary Operators:
- not all operators are symbols but there is `typeof` operator.
- minus operator `-` can be used both as binary or unary operator.

### Boolean values:
- Indicates two values `true` or `false`, `yes` or `no`.

## Comparison:
- Comparing 2 strings is done by going from left to right comparing unicode code for each character.
- There is only one value that is not equal to itself--> `NaN`.

## Logical Operators:
- JavaScript supports three logical operators (`and`, `or`, `not`).
- another conditional operator that is called `ternary operator`.
```js
  // cond ? true case: false case 
  console.log(true ? 1 : 2);
  --> 1
```

## Empty Values:
- the absence of a meaningful value and it's written as `null` and `undefined`.

## Automatic type conversion (`coercion`):
- When an operator is applied to the 'wrong' type of value, JaveScript will quietly convert that value to the type it needs using a set of rules and this is called `type coercion`.
- ```js
  null == undefined //true
  null == 0 //false
  ```
- To test whether something refers to the precise value `false`. Expressions like `0 == false` and `"" == false` are `true` because of automatic type conversion.
- The author recommend using when comparing the three charater comparison operator `===` defensively to prevent unexpected type conversions from tripping you up.

## Short-circuiting of logical operators:
- The logical operators `&&` and `||` handle values of different types, by converting a value to a boolean type value to decide what to do and it will return left-hand value or right-hand value.
```js
  (null || "user")  //"user"
  ("Agnes" || "user") //"Agnes"
```
- boolean values state that `0`, `NaN`, `""` count as `false` while all other values count as `true`.
- The idea of `short-circuit evaluation` for this case `true || X` the result will be `true`, and `X` is never evaluated or converted to a boolean value.
