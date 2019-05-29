/**
 * @fileoverview
 *
 * Beginners 03: Classes. Accessors.
 * - Learn how to create getters and setters
 *
 * Tipps:
 * - Hover+command values to see what the TypeScript compiler does with the typings
 * 
 * @start npm run exercise:04
 */


class AccessorExample {
    private _a: string;

    // [[TODO 1]] Create a setter for `a`

    public get a() {
        return this._a.toUpperCase();
    }
}