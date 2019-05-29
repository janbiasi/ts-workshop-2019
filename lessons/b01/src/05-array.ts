/**
 * @fileoverview
 *
 * Beginners 01: Basic Types. Array.
 * - Learn how to work with the basic type "array"
 * - Learn how to set value structure for "array"
 * - Learn how inference works with the basic types "array"
 *
 * Tipps:
 * - Hover values to see what the TypeScript compiler does with the typings
 */



const anyList = [];

anyList.push('String');
anyList.push(10);

// [[TODO 1]] Try looping through the array to see the entries type



const stringList: string[] = [];
// alternatively Array<string>, but should only be used for generic types

stringList.push('Max Mustermann');

// [[TODO 2]] Try pushing some more values (also non-string values) to the array
// and loop again through the values, do you find the difference?