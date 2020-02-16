"use strict";
// var, let and const
var colorVar = "Global Scope BROWN"; // Attached window object
console.log(colorVar);
//Function scope
function funcScope() {
    //var colorVar = "Func Scope green";
    colorVar = "Global Scope green";
    console.log(colorVar);
}
//console.log(color);
console.log(colorVar);
funcScope();
var colorLet = "Global Scope LET BROWN"; // Not attached window object, Still its global var
//Block Scope
function blockScope() {
    //if, switch, for, while...
    if (true) {
        //block scope
        var color = "Block Scope Yellow";
        //color = "Block Scope White"; //NOERROR
        var colorConst = "Block Scope RED";
        //colorConst = "Block Scope BLACK"; //ERROR
        console.log(color);
        console.log(colorConst);
    }
    //console.log(color); ERROR
    //console.log(colorConst);
}
blockScope();
