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

