//Primitive Datatypes =>Integer,String,Null,Undefined,boolean,Bigint, Symbol
//Integer
let num = 10;
console.log(num);

let account_balance = 20000;
console.log(account_balance);

let str = "Dhawal Saini";
console.log(str);

//string
let star = "Pole";
console.log(star);

//boolean
let val = true;
console.log(val);

//undefined
let account;
//value ko empty hi declare kar diya yaa phir value hi nhi di
console.log(typeof account);
console.log(account);

//null
let balance = null;
//isme hum yahan pe kuch nhi rakhte aur iska type object hota hain
console.log(balance);
console.log(typeof balance);

//bigint=> bahut hi bada number hota hain
let a = 314843084308038543098404304n;
console.log(typeof a);
console.log(a);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Symbol

//Non Primitive Datatypes =>Array,Object,Functions

//Arrays
let arr = [10, 20, 30, "Dhawal"];
console.log("Type of Array is -", typeof arr);
console.log("Our Array is -", arr);

//Object->ek saath ka data ek saath rahe jaise in insta when we sign up it asks for username and the password so we need it in a single variable rather than using different different variables for both

let obj = {
  user_name: "Dhawal Saini",
  account_no: 4203727,
  account_bal: 20000,
};

console.log("Type of the Object is -", typeof obj);
console.log(obj);

//Function
let func = function () {
  console.log("Hello");
  return 102;
};
console.log(func())

console.log("Type of Function is -", typeof func);
