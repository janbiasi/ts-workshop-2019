/**
 * @fileoverview
 *
 * Beginners 01: Basic Types. Object.
 * - Learn how to work with the basic type "obbject"
 * - Learn how to set value structure for "obbject"
 * - Learn how inference works with the basic types "obbject"
 *
 * Tipps:
 * - Hover values to see what the TypeScript compiler does with the typings
 */



const aCustomObject = {
    someValue: "here",
    andSomeMore: 192
};

// [[TODO 1]] Lookup the inferred type of `aCustomObject` by hovering

// [[TODO 2]] Try logging both values from the object to the console
// and check what your intellisense does ;)

// [[TODO 3]] Try adding a new property "myValue" with any value to the `aCustomObject`
// and see what happens. Do you know what why happens?




const customTypedObject: { a: number, b?: number } = {
    a: 10
};

// [[TODO 3]] Try setting property "b" on `customTypedObject`, does this work?