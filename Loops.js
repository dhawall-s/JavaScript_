let age = 30;

if (age >= 18) {
  console.log("Eligible For Vote");
} else {
  console.log("Not Eligible For Vote");
}

//if else if else

let age1 = 19;
if (age1 < 18) {
  console.log("Teen");
} else if (age1 > 45) {
  console.log("Young");
} else {
  console.log("Old");
}

//multiple conditions => Switch

console.log(new Date().getDay());
const d = new Date().getDay();
switch (d) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Unknown Error");
}

//FOR LOOP

for (let i = 0; i < 5; i++) {
  console.log("Hello Coder Army");
}

let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += i;
}
console.log(sum);
