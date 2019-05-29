/**
 * @fileoverview
 *
 * Beginners 03: Functions.
 * - Learn how to type functions
 * - Learn how to type parameters
 * - Learn how implicit typings work within functions
 * - Learn what void functions are
 *
 * Tipps:
 * - Hover+command values to see what the TypeScript compiler does with the typings
 * 
 * @start npm run exercise:01
 */

type MathFunction = (a: number, b: number) => number;

// we can use types to provide the signature and return value
const sumWithTypeInferrence: MathFunction = (a, b) => a + b;

// we can also type everything explicit (common way for non-generic functions)
const sumWithTypings = (a: number, b: number): number => a + b;

// combines math functions, returns a list of all results
const doMathsExplicit = (...mathFunctions: MathFunction[]) => {
    return (a: number, b: number): number[] => {
        return mathFunctions.map((mathFn: MathFunction): number => mathFn(a, b));
    }
}

// literally the same as above, typescript does the work great!
const doMathsImplicit = (...mathFunctions: MathFunction[]) => {
    return (a: number, b: number) => {
        return mathFunctions.map(mathFn => mathFn(a, b));
    }
}

doMathsImplicit(sumWithTypeInferrence, sumWithTypings)(3, 4);
doMathsExplicit(sumWithTypeInferrence, sumWithTypings)(3, 4);
// sumWithTypings will also be valid because the type matches the signature
// of the type "MathFunction" (will return [7, 7])

// [[TODO 1]] Create your own math functions for dividing values by using MathFunction
// [[TODO 2]] Create your own math functions for subtracting values by explicit typing
// [[TODO 3]] Use the doMaths function to log values with your written function

console.log(
    'Result:',
    doMathsImplicit(
        sumWithTypeInferrence,
        // ... your functions here
    )(12, 3)
);




// Void functions are functions which don't return anything explicitly, but there's
// a difference between void and never; never means a function is not able to return anything
// because of an interruption inside the runtime, void means the function will execute
// but return simply nothing.

const thisFunctionWontReturn = (): void => {
    console.log('Hey there, I won\'t do anything!');
};

const thisFunctionWillNeverReturn = (): never => {
    throw new Error('I won\'t return anytime');
};

// [[TODO 4]] Create a function which can return a string, never or nothing depending 
// on the input.

function fancyExampleFn(decider?: boolean) /*: add typings here */ {
    if (decider === undefined) {
        // never
    } else if (decider) {
        // string
    }

    // void
};