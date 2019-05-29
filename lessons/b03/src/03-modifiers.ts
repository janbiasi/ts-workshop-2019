/**
 * @fileoverview
 *
 * Beginners 03: Classes. Modifiers.
 * - Learn the accessor types and their behaviour
 * - Learn how to use the correct modifiers
 *
 * Tipps:
 * - Hover+command values to see what the TypeScript compiler does with the typings
 * 
 * @start npm run exercise:03
 */



// -> public
// public means the values are exposed and accessable from outside the class itself

class MyPublicExample {
    public value = 10;
}

new MyPublicExample().value;



// -> private
// private means the values can only be used in the class itself

class MyPrivateExample {
    private value = 11;
}

// [[TODO 1]] Try access the value from an instance



// -> protected
// protected means the values can be accessed within the class and inherited classes

class MyProtectedBase {
    protected value = 20;
}

// [[TODO 2]] Build a class which extends `MyProtectedBase` and uses the value