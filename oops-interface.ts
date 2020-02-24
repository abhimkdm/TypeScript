/// Only declaration, no implementation
// Multiple inheritence
interface ILogin {
  login(): void;
}
interface ILogout {
  logout(): void;
}

class HR implements ILogin, ILogout {
  logout(): void {
    throw new Error("Method not implemented.");
  }
  login(): void {
    throw new Error("Method not implemented.");
  }
}

class Sales implements ILogin {
  login(): void {
    throw new Error("Method not implemented.");
  }
}

class ITDept implements ILogin {
  login(): void {
    throw new Error("Method not implemented.");
  }
}

// Multiple inheritence not possible in normal class
// class Base1{
// }
// class Base2{
// }

// class Child extends Base1,Base2 {

// }
