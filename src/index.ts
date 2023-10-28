import { IdentityFunction } from './generics/generic-constraints';
import {GenericClass} from './generics/generics-class';
import {GenericFunctions} from './generics/generics-functions';
import { user, userWithFalseData } from './generics/generics-interface';

/*****************************************************************************
FUNCTION EXAMPLE
*****************************************************************************/
// GenericFunctions.printType(1); // number
// GenericFunctions.printType('Sagar'); // string
// GenericFunctions.printType(false); // boolean

// console.log(typeof GenericFunctions.returnAny(1)); // number
// console.log(typeof GenericFunctions.returnAny('Sagar')); // string
// console.log(typeof GenericFunctions.returnAny(false)); // boolean

// console.log(typeof GenericFunctions.returnGeneric(1)); // number
// console.log(typeof GenericFunctions.returnGeneric('Sagar')); // string
// console.log(typeof GenericFunctions.returnGeneric(false)); // boolean

// GenericFunctions.logLength([1, 2, 4]); // 3
// GenericFunctions.logLength(['1', '2', '4', 'Sagar']); // 4

// console.log(GenericFunctions.returnGenericArrowFunction('sagar')); // sagar


/*****************************************************************************
CLASS EXAMPLE
*****************************************************************************/
// const genericNumber: GenericClass<number> = new GenericClass(0, (x, y) => {
//   return x + y;
// });

// console.log(genericNumber.add(1, 2)); // 3

// const genericString: GenericClass<string> = new GenericClass('', (x, y) => {
//   return `${x} ${y}`;
// });

// console.log(genericString.add('Sagar', 'Galande')); // Sagar Galande


/*****************************************************************************
INTERFACE EXAMPLE
*****************************************************************************/
// console.log(user);

// console.log(userWithFalseData);


/*****************************************************************************
CONSTRAINT EXAMPLE
*****************************************************************************/
// IdentityFunction(3); // compile time error 'number is not assignable to type of lengthwise', because it has no length property
IdentityFunction([1, 2 , 3]) // 3, works fine as array has property of type length