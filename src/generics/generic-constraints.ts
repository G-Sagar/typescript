/**
 * You may sometimes want to write a generic function that works on a set of types 
 * where you have some knowledge about what capabilities that set of types will have
 * 
 * Instead of working with any and all types, we’d like to constrain this function to work with any and all types 
 * that also  have the .length property.
 */

interface Lengthwise {
    length: number
}

export function IdentityFunction<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}