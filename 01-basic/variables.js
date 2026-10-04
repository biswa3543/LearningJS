/*
  =========================================
  JAVASCRIPT VARIABLES & DATA TYPES SUMMARY
  =========================================

  1. VARIABLE DECLARATIONS:
     - let: Block-scoped variable that can be reassigned.
     - const: Block-scoped variable that cannot be reassigned.
     - var: Function-scoped variable (legacy, generally not recommended).

  2. PRIMITIVE DATA TYPES:
     - String: Text data wrapped in quotes (e.g., "Hello", 'World', `Hi`).
     - Number: Integers and floating-point numbers (e.g., 42, 3.14).
     - Boolean: Logical values representing true or false.
     - Undefined: A variable that has been declared but not assigned a value.
     - Null: The intentional absence of any object value.
     - Symbol: A unique and immutable identifier (introduced in ES6).
     - BigInt: Used for numbers larger than the standard Number limit.

  3. NON-PRIMITIVE (REFERENCE) DATA TYPES:
     - Object: Collections of key-value pairs (e.g., { name: "Alice", age: 30 }).
     - Array: Ordered lists of values (e.g., [1, 2, 3, 4]).
     - Function: Callable objects that execute a block of code.
*/

// Example ussage:
const os = require("os");
console.log(os.platform());
// os = 1; (will throw error)
let m = 1;
console.log(1 + 2.5);