let num1 = 231;
let num2 = new Number(231);
let num3 = new Number(231);
console.log(num2);
console.log(typeof num2);
console.log(num2 == num3);
console.log(num1 == num2); //object change hoga number mein

let num4 = 231.6823;
console.log(num4.toFixed(2));
console.log(num4.toExponential(2));
console.log(num4.toPrecision(4));
console.log(num4.toString());
console.log(num4.valueOf())
