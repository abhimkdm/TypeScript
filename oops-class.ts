/** 1. With Parameterized Construtor & Propertes */
class rectangle {
  //Properties
  L: number;
  B: number;

  //Initialization
  constructor(l: number, b: number) {
    this.L = l;
    this.B = b;
  }

  //Methods
  area() {
    return this.L * this.B;
  }
}

let obj = new rectangle(10, 20);
console.log(obj.area());

/** 2. Default Construtor */
class square {
  //Methods
  area(l: number, b: number) {
    return l * b;
  }
}

let objS = new square();
objS.area(10, 20);
