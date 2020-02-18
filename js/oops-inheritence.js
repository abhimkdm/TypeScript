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
var shape = /** @class */ (function () {
    //Initialization
    function shape(l, b) {
        this.L = l;
        this.B = b;
    }
    return shape;
}());
var rect = /** @class */ (function (_super) {
    __extends(rect, _super);
    function rect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Methods
    rect.prototype.area = function () {
        return this.L * this.B;
    };
    return rect;
}(shape));
var sqr = /** @class */ (function (_super) {
    __extends(sqr, _super);
    function sqr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Methods
    sqr.prototype.area = function () {
        return this.L * this.B;
    };
    return sqr;
}(shape));
var objRect = new rect(10, 10);
objRect.L = 20;
console.log(objRect.area());
var objSqr = new sqr(10, 10);
console.log(objSqr.area());
