//Simple functions
function display(): string {
  return "Display";
}
console.log(display());

var display02 = function() {
  console.log("Display 02");
};
display02();

// arrow functions
var display03 = (): void => console.log("Display 03");
display03();

var display04 = (a: any, b: any): any => {
  return a + b;
};
display04(10, 20);
