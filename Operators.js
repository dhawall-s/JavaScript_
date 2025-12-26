//Divide ->left to right
//Multiply ->left to right
//Add,Sub ->left to right
//Modulus Operator -> Modulus gives the remainder
//++Increment Operator , --Decrement Operator
//Assignment Operator = assigns the value

console.log(20 % 2);
let sum = 20;
console.log(sum);
++sum;
console.log(sum);
sum++;
console.log(sum);

//Comparison Operator
let a1 = 1;
let a2 = 2;
console.log(a1 == a2);
console.log(a1 > a2);
console.log(a1 < a2);

let num = 10;
let str = "10";
console.log(num == str);
console.log(a1 === str);

//null == undefined ->true
//null === undefined ->false

console.log(NaN == NaN);

let str2 = "Rohit";
let str3 = "Rohit";
console.log(str2 == str3);

let a11 = 123;
let a22 = "123";
let a33 = 123;
console.log((a11 == a22) == a33);
a33 = true;
console.log((a11 == a22) == a33);

//Logical Operator -> && || !

let age = 18;
let money = 123;
console.log(age >= 18 && money > 100);
console.log(age >= 18 || money > 200);
console.log(!(age > 10));

//Bitwise Operator
console.log(4 & 4);
console.log(4 | 4);
console.log(11 | 14);
console.log(5 ^ 7);
console.log(5 << 2); //5 multiply by 2 power 3
console.log(20 >> 2); //20 divided by 2 power 2
