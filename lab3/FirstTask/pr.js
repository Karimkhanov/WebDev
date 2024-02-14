let str = "Hello";

str.test = 5; // (*)

alert(str.test);
// Depending on whether you have use strict or not, the result may be:

// undefined (no strict mode)
// An error (strict mode).
// Why? Let’s replay what’s happening at line (*):

// When a property of str is accessed, a “wrapper object” is created.
// In strict mode, writing into it is an error.
// Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, so in the last line str has no trace of the property.
// This example clearly shows that primitives are not objects.

// They can’t store additional data.