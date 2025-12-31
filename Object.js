// object is a key value Pair
const obj = {
  naam: "Dhawal",
  ac: 420,
  gender: "Male",
};
console.log(obj);

const inst = {
  insta_user: "dhawal",
  insta_pass: "12345",
};
console.log(inst);
console.log(inst["insta_pass"]);

const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

const person = new Object();

person.name = "Dhawal";
person.age = 80;
person.gender = "Male";
console.log(person);
delete person.age;

console.log(person);

person.name = "Munna";
console.log(person);

class People {
  constructor(na, ag, gen) {
    this.na = na;
    this.ag = ag;
    this.gen = gen;
  }
}

let Per1 = new People("Rohit", 20, "Male");
let Per2 = new People("Dhawal", 21, "Male");
console.log(Per1);
console.log(Per2);

let obje = {
  name: "Rohit",
  age: 30,
  ac_bal: 345334,
  gender: "Male",
};
const arr1 = Object.keys(obje);
console.log(arr1);

const arr2 = Object.values(obje);
console.log(arr2);

const arr3 = Object.entries(obj);
console.log(arr3);

let ob1 = { a: 1, b: 2 };
let ob2 = { c: 3, d: 4 };
let ob3 = { f: 5, g: 6 };
let ob4 = Object.assign({}, ob1, ob2, ob3);
console.log(ob4);

const obj5 = { ...ob1, ...ob2, ...ob3 };
console.log(obj5);


const user={
  name:"Dhawal",
  balance:420,
  address:{
    pincode:"202020",
    city:"JPR"
  }
}

console.log(user.address.pincode)