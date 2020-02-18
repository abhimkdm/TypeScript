//Base class, Common stuff
class shape {
  //Properties
  L: number;
  B: number;

  //Initialization
  constructor(l: number, b: number) {
    this.L = l;
    this.B = b;
  }
}

class rect extends shape {
  //Methods
  area() {
    return this.L * this.B;
  }
}

class sqr extends shape {
  //Methods
  area() {
    return this.L * this.B;
  }
}

let objRect = new rect(10, 10);
objRect.L = 20;
console.log(objRect.area());

let objSqr = new sqr(10, 10);
console.log(objSqr.area());
