/**
 * @fileoverview
 *
 * Beginners 02: Interfaces.
 * - Learn how to build interfaces
 * - Learn how to inherit interfaces
 * - Learn to use the prefix "I" for interfaces
 *
 * Tipps:
 * - Hover+command values to see what the TypeScript compiler does with the typings
 */

interface IExampleInterfaceA {
    a: number
}

const instanceOfA: IExampleInterfaceA = {
    a: 10
};




interface IExampleInterfaceAB extends IExampleInterfaceA {
    b?: number; // b is optional
}

const instanceOfAB: IExampleInterfaceAB = {
    a: 10,
    b: 20
};

const instanceOfABWithoutB: IExampleInterfaceAB = {
    a: 10
};


// [[TODO 1]] Create an interface for a person with the fields "name" and "age"