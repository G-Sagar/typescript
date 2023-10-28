export class GenericFunctions {
  public static printType<T>(arg: T): void {
    console.log(typeof arg);
  }

  public static returnAny(arg: any): any {
    return arg;
  }

  public static returnGeneric<T>(arg: T): T {
    return arg;
  }

  /*
  Following code will fail with at compile time.
  Because there is no evident way that the given argument contains the length method it fails with the error
  "Property 'length' does not exist on type 'T'."

  public static logLength<T>(arg: T) {
     console.log(arg.length);
  }
  */

  // While if you see in the followint example, argument 'arg' is of array type and this should work fine as arrays has length property
  public static logLength<T>(arg: T[]) {
    console.log(arg.length);
  }

  // generic arrow function
  static returnGenericArrowFunction: <T>(arg: T) => T =
    GenericFunctions.returnGeneric;
}
