/**
 * @fileoverview
 *
 * Beginners 03: Gondel.
 * - Learn how to type Gondel components
 *
 * Tipps:
 * - Hover+command values to see what the TypeScript compiler does with the typings
 *
 * @start npm run exercise:01
 */
import { Component, GondelBaseComponent, findComponents } from '@gondel/core';

@Component('Input')
export class Input extends GondelBaseComponent<HTMLInputElement> {
    public get name() {
        return this._ctx.name;
    }

    public get value() {
        return this._ctx.value;
    }
}

@Component('Form')
export class Form extends GondelBaseComponent<HTMLFormElement> {
    public submit() {
        const inputs = findComponents<Input>(this._ctx, 'Input');
        const result = inputs.map(input => [input.name, input.value]);

        console.log('Submit', result);
    }
}

// [[TODO 1]] Try out & play around with the online example of gondel typescript
// https://codesandbox.io/s/gondeltypescriptexample-zup56