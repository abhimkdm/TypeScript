/** Public**/
//By default, all members of a class in TypeScript are public.
//All the public members can be accessed anywhere without any restrictions.

/** Private */
//The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class.

/** Proteted */
//The protected access modifier is similar to the private access modifier, except that protected members can be accessed using their deriving classes.

class Automob {
  public color: string = "green";
  private price: number = 12012001;
  protected Engine: number = 1.2;

  details() {
    return this.color + this.price + this.Engine;
  }
}

class Car extends Automob {
  //   details() {
  //     return this.color + this.price + this.Engine;
  //   }
}
