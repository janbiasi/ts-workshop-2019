/**
 * @fileoverview
 *
 * Beginners 01: Basic Types. String.
 * - Learn how to work with the basic type "string"
 * - Learn how inference works with the basic type "string"
 *
 * Tipps:
 * - Hover values to see what the TypeScript compiler does with the typings
 */



let anImplicitString = "hello world";
let anExplicitString: string = "hello world too!";

// re-assigning works great with numbers
anImplicitString = "hello world too";
anExplicitString = "hello world";

// [[TODO 1]] try to assign another value than a string to the variables



let anExplicitStringValue: "value" = "value";

// [[TODO 2]] try to assign another value than a "value" to anExplicitStringValue