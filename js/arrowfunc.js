"use strict";
//Simple functions
function display() {
    return "Display";
}
console.log(display());
var display02 = function () {
    console.log("Display 02");
};
display02();
// arrow functions
var display03 = function () { return console.log("Display 03"); };
display03();
var display04 = function (a, b) {
    return a + b;
};
display04(10, 20);
