"use strict";
/** 1. With Parameterized Construtor & Propertes */
var rectangle = /** @class */ (function () {
    //Initialization
    function rectangle(l, b) {
        this.L = l;
        this.B = b;
    }
    //Methods
    rectangle.prototype.area = function () {
        return this.L * this.B;
    };
    return rectangle;
}());
var obj = new rectangle(10, 20);
console.log(obj.area());
/** 2. Default Construtor */
var square = /** @class */ (function () {
    function square() {
    }
    //Methods
    square.prototype.area = function (l, b) {
        return l * b;
    };
    return square;
}());
var objS = new square();
objS.area(10, 20);
