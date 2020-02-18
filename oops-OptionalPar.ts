//Base class, Common stuff
class shapes {
  //Properties
  L: number;
  B: number;
  R: number;

  //Initialization
  constructor(l?: number, b?: number, r?: number) {
    this.L = l || 0;
    this.B = b || 0;
    this.R = r || 0;
  }
}

class Squar extends shapes {
  //Methods
  area() {
    return this.L * this.B;
  }
}

class circle extends shapes {
  //Methods
  area() {
    return this.R * this.R * Math.PI;
  }
}

let objSquare = new Squar(10, 10);
console.log(objSquare.area());

let objCrl = new circle();
objCrl.R = 10;
console.log(objCrl.area());
