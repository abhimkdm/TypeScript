"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Base class, Common stuff
var shapes = /** @class */ (function () {
    //Initialization
    function shapes(l, b, r) {
        this.L = l || 0;
        this.B = b || 0;
        this.R = r || 0;
    }
    return shapes;
}());
var Squar = /** @class */ (function (_super) {
    __extends(Squar, _super);
    function Squar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Methods
    Squar.prototype.area = function () {
        return this.L * this.B;
    };
    return Squar;
}(shapes));
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Methods
    circle.prototype.area = function () {
        return this.R * this.R * Math.PI;
    };
    return circle;
}(shapes));
var objSquare = new Squar(10, 10);
console.log(objSquare.area());
var objCrl = new circle();
objCrl.R = 10;
console.log(objCrl.area());
