/**
 * @fileoverview
 *
 * Beginners 03: Classes.
 * - Learn how to build classes
 * - Learn how to use interfaces for classes
 *
 * Tipps:
 * - Hover+command values to see what the TypeScript compiler does with the typings
 * 
 * @start npm run exercise:02
 */

// Example Context: we want to create a Cache class which stores key-value based
// entries like a Map would do.

interface ICacheAPI {
    set(key: string, value: any): void;
    get(key: string): any;
}

class DummyCache implements ICacheAPI {
    set(key: string, value: any) { }
    get(key: string) { }
}


// [[TODO 1]] Create your own cache which will store the values in a local variable,
// see below:

class MyCache extends DummyCache {
    private entries: { [k: string]: any } = {};

    // set() ...
    // get() ...
}



// Classes can also have modifiers inside the constructore e.g. if you want to set
// values from the constructor to the class you'll know the classic way (see below)
// but TS has a neater way for that

function MyOldUser(name: string, age: number) {
    this.name = name;
    this.age = age;
}

class MyNewUser {
    constructor(public name: string, public age: string) { }
}

// [[TODO 2]] Create a new instance of MyNewUser and try log the name and age to
// the console.

// [[TODO 3]] Remove the public modifier from the constructor parameters and see
// what happens.