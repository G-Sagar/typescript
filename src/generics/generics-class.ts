export class GenericClass<Type> {
  constructor(arg: Type, add: {(x: Type, y: Type): Type}) {
    this.arg = arg;
    this.add = add;
  }
  arg: Type;
  add: (x: Type, y: Type) => Type;
}
